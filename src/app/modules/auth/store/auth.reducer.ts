import {
    LOG_IN_ATTEMPT_ACTION, LOG_OUT_ACTION, REDIRECT_TO_LOG_IN_ACTION, SUCCESS_LOGGED_IN_ACTION,
    USER_ALREADY_AUTHENTICATED_ACTION
} from './auth.actions';
import * as firebase from 'firebase/app';
import * as _ from 'lodash';


export interface IAuthState {
    firebaseUser: firebase.User;
}

export const INITIAL_AUTH_STATE: IAuthState = {
    firebaseUser: undefined
};

export function authReducer(state: IAuthState = INITIAL_AUTH_STATE, action: any): IAuthState {
    let newState = _.cloneDeep(state);

    switch (action.type) {
        case SUCCESS_LOGGED_IN_ACTION:
            newState.firebaseUser = action.payload.firebaseUser;

            return newState;

        case LOG_IN_ATTEMPT_ACTION:
            return newState;

        case REDIRECT_TO_LOG_IN_ACTION:
            return newState;

        case LOG_OUT_ACTION:
            newState.firebaseUser = undefined;
            return newState;

        case USER_ALREADY_AUTHENTICATED_ACTION:
            newState.firebaseUser = action.payload.firebaseUser;

            return newState;

        default:
            return newState;
    }
}