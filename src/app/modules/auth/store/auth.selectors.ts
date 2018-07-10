import { IAuthState } from './auth.reducer';
import { createSelector } from '@ngrx/store';
import { IAppState } from '../../store/root.reducers';

export const selectAuthFeature = (state: IAppState) => state.auth;

export const selectAuthUser = createSelector(
    selectAuthFeature,
    (state: IAuthState) => state.authUser
);