import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { IChatState } from './chat.reducer';
import { Store } from '@ngrx/store';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import {
    CREATE_NEW_ROOM,
    CreateNewRoomAction,
    FETCH_ROOMS_LIST,
    FetchRoomsList,
    RoomsListFetched
} from './chat.actions';
import { NotificationsService } from 'angular2-notifications';
import { Observable, of } from 'rxjs';
import { RoomsService } from '../services/rooms.service';


@Injectable()
export class ChatEffectsService {

    constructor(protected actions$: Actions,
                protected store: Store<IChatState>,
                protected notificationsService: NotificationsService,
                protected roomsService: RoomsService,
                protected router: Router) {
    }

    @Effect()
    fetchRoomsList$: Observable<RoomsListFetched> = this.actions$.pipe(
        ofType<FetchRoomsList>(FETCH_ROOMS_LIST),

        mergeMap(() => {
            return this.roomsService.getRoomsList().pipe(
                switchMap(roomsList => {
                    return of(new RoomsListFetched(roomsList));
                })
            );
        }),

        catchError((err, caught) => {
            this.notificationsService.error(err.message);

            return caught;
        })
    );

    @Effect({dispatch: false})
    createNewRoom$: Observable<any> = this.actions$.pipe(
        ofType<CreateNewRoomAction>(CREATE_NEW_ROOM),

        mergeMap((action) => {
            return this.roomsService.createNewRoom(action.payload);
        }),

        catchError((err, caught) => {
            this.notificationsService.error(err.message);

            return caught;
        })
    );
}
