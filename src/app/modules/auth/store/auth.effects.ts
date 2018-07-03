import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {
    LOG_IN_ATTEMPT_ACTION, REDIRECT_TO_LOG_IN_ACTION, LogInAttemptAction, RedirectToLogInAction, SuccessLoggedInAction,
    LogOutAction, LOG_OUT_ACTION
} from './auth.actions';
import { Router } from '@angular/router';
import { IAuthState } from './auth.reducer';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/internal/Observable';
import { mergeMap } from 'rxjs/operators';


@Injectable()
export class AuthEffectsService {

    constructor(protected actions$: Actions,
                protected store: Store<IAuthState>,
                protected afAuth: AngularFireAuth,
                protected router: Router) {
    }


    @Effect({dispatch: false})
    loginAttempt$: Observable<any> = this.actions$.pipe(
        ofType<LogInAttemptAction>(LOG_IN_ATTEMPT_ACTION),
        mergeMap(async action => {
            const userCreds = await this.afAuth.auth.signInWithEmailAndPassword(action.payload.email, action.payload.password);


        })
    );
    // .ofType<LogInAttemptAction>(LOG_IN_ATTEMPT_ACTION)
    // .
    // .switchMap(action => {
    //     return this.afAuth.auth.signInWithEmailAndPassword(action.payload.email, action.payload.password)
    // })
    // .switchMap((authFirebaseData) => {
    //     return this.authService.getMe()
    //         .do((adminUser) => {
    //             return this.store.dispatch(
    //                 new SuccessLoggedInAction({firebaseUser: authFirebaseData.toJSON(), adminUser})
    //             );
    //         });
    // })
    // .do(() => {
    //     return this.router.navigate(['/shipments']);
    // })
    // .catch(err => {
    //     console.error(err.message);
    //
    //     return Observable.of(true);
    // });

    // @Effect({dispatch: false})
    // redirectToLogin$ = this.actions$
    //     .ofType<RedirectToLogInAction>(REDIRECT_TO_LOG_IN_ACTION)
    //     .do(() => {
    //         return this.router.navigate(['/auth/login']);
    //     });
    //
    //
    // @Effect({dispatch: false})
    // logout$ = this.actions$
    //     .ofType<LogOutAction>(LOG_OUT_ACTION)
    //     .switchMap(() => {
    //         return this.afAuth.auth.signOut();
    //     })
    //     .do(() => {
    //         return this.router.navigate(['/auth/login']);
    //     });
}
