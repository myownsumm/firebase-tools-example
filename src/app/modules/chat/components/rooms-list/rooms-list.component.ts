import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IChatState } from '../../store/chat.reducer';
import { FetchRoomsList } from '../../store/chat.actions';
import { Observable } from 'rxjs';
import { IRoom } from '../../../../../typings';
import { selectAvailableRooms } from '../../store/chat.selectors';


@Component({
    selector: 'app-chat-rooms-list',
    templateUrl: './rooms-list.component.html',
    styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
    protected availableRooms$: Observable<IRoom>;

    constructor(protected store: Store<IChatState>) {
        this.availableRooms$ = store.pipe(
            select(selectAvailableRooms)
        );
    }

    ngOnInit() {
        this.store.dispatch(
            new FetchRoomsList()
        );
    }
}
