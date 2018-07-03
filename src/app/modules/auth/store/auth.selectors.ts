import { IAuthState } from './auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAuthFeature = createFeatureSelector<IAuthState>('auth');

export const selectAuthFirebaseUser = createSelector(
    selectAuthFeature,
    (state: IAuthState) => state.firebaseUser
);