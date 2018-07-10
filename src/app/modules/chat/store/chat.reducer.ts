import * as _ from 'lodash';


export interface IChatState {
    availableRooms: any[]; // todo
}

export const INITIAL_CHAT_STATE: IChatState = {
    availableRooms: undefined
};

export function chatReducer(state: IChatState = INITIAL_CHAT_STATE, action: any): IChatState {
    let newState = _.cloneDeep(state);

    switch (action.type) {
        default:
            return newState;
    }
}