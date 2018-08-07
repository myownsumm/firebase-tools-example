import { Action } from '@ngrx/store';

import { IAuthUser } from '../../../../typings';

export const LOG_IN_ATTEMPT_ACTION = '[auth] LOG_IN_ATTEMPT_ACTION';
export const REGISTER_ATTEMPT_ACTION = '[auth] REGISTER_ATTEMPT_ACTION';
export const LOG_IN_SUCCESS_ACTION = '[auth] LOG_IN_SUCCESS_ACTION';
export const LOG_OUT_ACTION = '[auth] LOG_OUT_ACTION';

export const NEED_TO_LOG_IN_ACTION = '[auth] NEED_TO_LOG_IN_ACTION';
export const CHECK_IF_USER_AUTHED_ACTION = '[auth] CHECK_IF_USER_AUTHED_ACTION';

export class LogInAttemptAction implements Action {
    readonly type = LOG_IN_ATTEMPT_ACTION;

    constructor(public payload: { email: string, password: string }) {

    }
}

export class RegisterAttemptAction implements Action {
    readonly type = REGISTER_ATTEMPT_ACTION;

    constructor(public payload: { email: string, password: string }) {

    }
}

export class LogInSuccessAction implements Action {
    readonly type = LOG_IN_SUCCESS_ACTION;

    constructor(public payload: IAuthUser) {

    }
}

export class LogOutAction implements Action {
    readonly type = LOG_OUT_ACTION;

    constructor() {

    }
}

export class NeedToLogInAction implements Action {
    readonly type = NEED_TO_LOG_IN_ACTION;

    constructor() {

    }
}

export class CheckIfUserAuthedAction implements Action {
    readonly type = CHECK_IF_USER_AUTHED_ACTION;

    constructor() {

    }
}