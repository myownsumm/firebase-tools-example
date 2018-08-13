import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IChatState } from '../../store/chat.reducer';
import { FetchRoomsList } from '../../store/chat.actions';


@Component({
    selector: 'app-chat-rooms-list',
    templateUrl: './rooms-list.component.html',
    styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
    constructor(protected store: Store<IChatState>) {

    }

    ngOnInit() {
        this.store.dispatch(
            new FetchRoomsList()
        );
    }
}
