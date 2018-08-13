import * as _ from 'lodash';
import { ROOMS_LIST_FETCHED } from './chat.actions';
import { IRoom } from '../../../../typings';


export interface IChatState {
    availableRooms: IRoom[];
}

export const INITIAL_CHAT_STATE: IChatState = {
    availableRooms: undefined
};

export function chatReducer(state: IChatState = INITIAL_CHAT_STATE, action: any): IChatState {
    let newState = _.cloneDeep(state);

    switch (action.type) {
        case ROOMS_LIST_FETCHED: {
            newState.availableRooms = action.payload;

            return newState;
        }

        default:
            return newState;
    }
}