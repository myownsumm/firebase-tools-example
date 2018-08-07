import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAuthState } from '../store/auth.reducer';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { IAuthUser } from '../../../../typings';
import { selectAuthUser } from '../store/auth.selectors';
import { switchMap } from 'rxjs/operators';
import { CheckIfUserAuthedAction } from '../store/auth.actions';

@Injectable()
export class AuthGuard implements CanActivate {
    authUser$: Observable<IAuthUser>;

    constructor(private store: Store<IAuthState>, protected router: Router) {
        this.authUser$ = store.pipe(
            select(selectAuthUser)
        );
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const authUser$ = this.authUser$
            .pipe(
                switchMap((stateAuthUser) => {
                    !stateAuthUser && this.store.dispatch(new CheckIfUserAuthedAction());

                    return of(!!stateAuthUser);
                })
            );

        // sets boolean observable to hot mode. find better solution?
        authUser$.subscribe();

        return authUser$;
    }
}