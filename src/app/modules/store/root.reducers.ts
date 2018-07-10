import * as fromRouter from '@ngrx/router-store';
import { MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { RouterStateSnapshot } from '@angular/router';
import { IAuthState } from '../auth/store/auth.reducer';
import { environment } from '../../../environments/environment';
import { IChatState } from '../chat/store/chat.reducer';


export interface IAppState {
    routerReducer: fromRouter.RouterReducerState<RouterStateSnapshot>;
    auth?: IAuthState,
    chat?: IChatState,
}

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [storeFreeze] : [];

export const reducers = {
    routerReducer: fromRouter.routerReducer
};