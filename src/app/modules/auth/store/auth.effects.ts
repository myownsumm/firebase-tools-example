import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
    LOG_IN_ATTEMPT_ACTION, LogInAttemptAction, REGISTER_ATTEMPT_ACTION, RegisterAttemptAction
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


    @Effect({dispatch: false})
    loginAttempt$: Observable<void | Action> = this.actions$.pipe(
        ofType<LogInAttemptAction>(LOG_IN_ATTEMPT_ACTION),

        mergeMap(async action => {
            const userCreds = await this.afAuth.auth.signInWithEmailAndPassword(action.payload.email, action.payload.password);

            // todo dispatch user logged in action
        }),

        catchError((err, caught) => {
            this.notificationsService.error(err.message);

            return caught;
        })
    );

    @Effect()
    registerAttempt$: Observable<void | Action> = this.actions$.pipe(
        ofType<RegisterAttemptAction>(REGISTER_ATTEMPT_ACTION),

        mergeMap(async action => {
            const userCreds = await this.afAuth.auth.createUserWithEmailAndPassword(action.payload.email, action.payload.password);

            console.log('userCreds', userCreds);
        }),

        catchError((err, caught) => {
            this.notificationsService.error(err.message);

            return caught;
        })
    );
}
