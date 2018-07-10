import {
    LOG_IN_ATTEMPT_ACTION, LOG_IN_SUCCESS_ACTION, LOG_OUT_ACTION
} from './auth.actions';
import * as firebase from 'firebase/app';
import * as _ from 'lodash';


export interface IAuthState {
    authUser: IAuthState;
}

export const INITIAL_AUTH_STATE: IAuthState = {
    authUser: undefined
};

export function authReducer(state: IAuthState = INITIAL_AUTH_STATE, action: any): IAuthState {
    let newState = _.cloneDeep(state);

    switch (action.type) {
        case LOG_IN_SUCCESS_ACTION: {
            newState.authUser = action.payload;

            return newState;
        }

        case LOG_OUT_ACTION: {
            newState.authUser = undefined;

            return newState;
        }

        default:
            return newState;
    }
}