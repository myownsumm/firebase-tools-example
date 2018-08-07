import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAuthState } from '../store/auth.reducer';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { IAuthUser } from '../../../../typings';
import { selectAuthUser } from '../store/auth.selectors';

@Injectable()
export class AuthGuard implements CanActivate {
    authUser$: Observable<IAuthUser>;

    constructor(private store: Store<IAuthState>, protected router: Router) {
        this.authUser$ = store.pipe(
            select(selectAuthUser)
        )
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        this.authUser$.subscribe(user => {
            console.log(user);
        });


        // this.router.navigate(['/auth', 'login']);

        return of(false);
    }
}