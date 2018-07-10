import {
    LOG_IN_ATTEMPT_ACTION
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
        default:
            return newState;
    }
}