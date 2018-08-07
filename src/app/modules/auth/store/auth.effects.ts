import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
    LOG_IN_ATTEMPT_ACTION, LOG_IN_SUCCESS_ACTION, LOG_OUT_ACTION,
    LogInAttemptAction,
    LogInSuccessAction,
    LogOutAction,
    REGISTER_ATTEMPT_ACTION,
    RegisterAttemptAction
} from './auth.actions';
import { Router } from '@angular/router';
import { IAuthState } from './auth.reducer';
import { Action, Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/internal/Observable';
import { NotificationsService } from 'angular2-notifications';
import { catchError, concatMap, mergeMap } from 'rxjs/operators';


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
}
