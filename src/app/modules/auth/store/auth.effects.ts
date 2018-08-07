import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
    CHECK_IF_USER_AUTHED_ACTION,
    CheckIfUserAuthedAction,
    LOG_IN_ATTEMPT_ACTION, LOG_IN_SUCCESS_ACTION, LOG_OUT_ACTION,
    LogInAttemptAction,
    LogInSuccessAction,
    LogOutAction, NEED_TO_LOG_IN_ACTION, NeedToLogInAction,
    REGISTER_ATTEMPT_ACTION,
    RegisterAttemptAction
} from './auth.actions';
import { Router } from '@angular/router';
import { IAuthState } from './auth.reducer';
import { Action, Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/internal/Observable';
import { NotificationsService } from 'angular2-notifications';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class AuthEffectsService {

    constructor(protected actions$: Actions,
                protected store: Store<IAuthState>,
                protected afAuth: AngularFireAuth,
                protected notificationsService: NotificationsService,
                protected router: Router) {
    }


    @Effect()
    loginAttempt$: Observable<Action> = this.actions$.pipe(
        ofType<LogInAttemptAction>(LOG_IN_ATTEMPT_ACTION),

        mergeMap(async action => {
            const userCreds = await this.afAuth.auth.signInWithEmailAndPassword(action.payload.email, action.payload.password);

            return new LogInSuccessAction({email: userCreds.user.email});
        }),

        catchError((err, caught) => {
            this.notificationsService.error(err.message);

            return caught;
        })
    );

    @Effect()
    registerAttempt$: Observable<Action> = this.actions$.pipe(
        ofType<RegisterAttemptAction>(REGISTER_ATTEMPT_ACTION),

        mergeMap(async action => {
            const userCreds = await this.afAuth.auth.createUserWithEmailAndPassword(action.payload.email, action.payload.password);

            return new LogInSuccessAction({email: userCreds.user.email});
        }),

        catchError((err, caught) => {
            this.notificationsService.error(err.message);

            return caught;
        })
    );

    @Effect({dispatch: false})
    logout$: Observable<void> = this.actions$.pipe(
        ofType<LogOutAction>(LOG_OUT_ACTION),

        mergeMap(action => {
            return this.afAuth.auth.signOut();
        }),

        catchError((err, caught) => {
            this.notificationsService.error(err.message);

            return caught;
        })
    );

    @Effect({dispatch: false})
    loginSuccess$: Observable<boolean> = this.actions$.pipe(
        ofType<LogInSuccessAction>(LOG_IN_SUCCESS_ACTION),

        mergeMap(action => {
            return this.router.navigate(['/']);
        }),

        catchError((err, caught) => {
            this.notificationsService.error(err.message);

            return caught;
        })
    );

    @Effect()
    checkIfUserAuthed$: Observable<any> = this.actions$.pipe(
        ofType<CheckIfUserAuthedAction>(CHECK_IF_USER_AUTHED_ACTION),

        switchMap(() => {
            return this.afAuth.authState.pipe(
                switchMap((currentFirebaseUser) => {
                    if (currentFirebaseUser && currentFirebaseUser.email) {
                        return of(new LogInSuccessAction({email: currentFirebaseUser.email}));
                    }

                    return of(new NeedToLogInAction());
                })
            );
        }),

        catchError((err, caught) => {
            this.notificationsService.error(err.message);

            return caught;
        })
    );

    @Effect({dispatch: false})
    needToLogIn$: Observable<boolean> = this.actions$.pipe(
        ofType<NeedToLogInAction>(NEED_TO_LOG_IN_ACTION),

        mergeMap(action => {
            return this.router.navigate(['/auth', 'login']);
        }),

        catchError((err, caught) => {
            this.notificationsService.error(err.message);

            return caught;
        })
    );
}
