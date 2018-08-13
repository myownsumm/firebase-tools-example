import * as _ from 'lodash';
import { ROOMS_LIST_FETCHED } from './chat.actions';


export interface IChatState {
    availableRooms: any[]; // todo
}

export const INITIAL_CHAT_STATE: IChatState = {
    availableRooms: undefined
};

export function chatReducer(state: IChatState = INITIAL_CHAT_STATE, action: any): IChatState {
    let newState = _.cloneDeep(state);

    switch (action.type) {
        case ROOMS_LIST_FETCHED: {
            console.log(action.payload);

            return newState;
        }

        default:
            return newState;
    }
}