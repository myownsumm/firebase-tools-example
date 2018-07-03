import { Action } from '@ngrx/store';

import * as firebase from 'firebase/app';
import { IAuthUser } from '../../../../typings';

export const LOG_IN_ATTEMPT_ACTION = '[auth] LOG_IN_ATTEMPT_ACTION';
export const REDIRECT_TO_LOG_IN_ACTION = '[auth] REDIRECT_TO_LOG_IN_ACTION';
export const LOG_OUT_ACTION = '[auth] LOG_OUT_ACTION';
export const SUCCESS_LOGGED_IN_ACTION = '[auth] SUCCESS_LOGGED_IN_ACTION';
export const USER_ALREADY_AUTHENTICATED_ACTION = '[auth] USER_ALREADY_AUTHENTICATED_ACTION';

export class LogInAttemptAction implements Action {
    readonly type = LOG_IN_ATTEMPT_ACTION;

    constructor(public payload: { email: string, password: string }) {

    }
}

export class RedirectToLogInAction implements Action {
    readonly type = REDIRECT_TO_LOG_IN_ACTION;

    constructor(public payload?: string) {

    }
}

export class LogOutAction implements Action {
    readonly type = LOG_OUT_ACTION;
}

export class SuccessLoggedInAction implements Action {
    readonly type = SUCCESS_LOGGED_IN_ACTION;

    constructor(public payload: { firebaseUser: firebase.User, adminUser: IAuthUser }) {
    }
}

export class UserAlreadyAuthenticatedAction implements Action {
    readonly type = USER_ALREADY_AUTHENTICATED_ACTION;

    constructor(public payload: { firebaseUser: firebase.User, adminUser: IAuthUser }) {
    }
}