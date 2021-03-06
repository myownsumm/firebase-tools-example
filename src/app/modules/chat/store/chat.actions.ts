import { Action } from '@ngrx/store';
import { IRoom } from '../../../../typings';

export const FETCH_ROOMS_LIST = '[chat] FETCH_ROOMS_LIST';
export const ROOMS_LIST_FETCHED = '[chat] ROOMS_LIST_FETCHED';

export const CREATE_NEW_ROOM = '[chat] CREATE_NEW_ROOM';

export class FetchRoomsList implements Action {
    readonly type = FETCH_ROOMS_LIST;

    constructor() {

    }
}

export class RoomsListFetched implements Action {
    readonly type = ROOMS_LIST_FETCHED;

    constructor(public payload: IRoom[]) {

    }
}

export class CreateNewRoomAction implements Action {
    readonly type = CREATE_NEW_ROOM;

    constructor(public payload: IRoom) {

    }
}