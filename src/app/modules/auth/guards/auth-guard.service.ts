import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAuthState } from '../store/auth.reducer';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { IAuthUser } from '../../../../typings';
import { selectAuthUser } from '../store/auth.selectors';
import { mergeMap, switchMap } from 'rxjs/operators';
import { NeedToLogInAction } from '../store/auth.actions';

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
                switchMap((authUser) => {
                    !authUser && this.store.dispatch(new NeedToLogInAction());

                    return of(!!authUser);
                })
            );

        // sets boolean observable to hot mode. find better solution?
        authUser$.subscribe();

        return authUser$;
    }
}