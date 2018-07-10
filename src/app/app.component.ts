import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAuthState } from './modules/auth/store/auth.reducer';
import { Observable } from 'rxjs/internal/Observable';
import { IAuthUser } from '../typings';
import { selectAuthUser } from './modules/auth/store/auth.selectors';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    authUser$: Observable<IAuthUser>;

    constructor(private store: Store<IAuthState>) {
        this.authUser$ = store.pipe(
            select(selectAuthUser)
        );
    }
}
