import { IChatState } from './chat.reducer';
import { createSelector } from '@ngrx/store';
import { IAppState } from '../../store/root.reducers';

export const selectChatFeature = (state: IAppState) => state.chat;

export const selectAvailableRooms = createSelector(
    selectChatFeature,
    (state: IChatState) => state.availableRooms
);