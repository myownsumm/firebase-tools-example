import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IChatState } from '../../store/chat.reducer';
import { CreateNewRoomAction, FetchRoomsList } from '../../store/chat.actions';
import { Observable } from 'rxjs';
import { IRoom } from '../../../../../typings';
import { selectAvailableRooms } from '../../store/chat.selectors';
import { MatDialog } from '@angular/material';
import { CreateRoomDialogComponent } from '../create-room/create-room-dialog.component';


@Component({
    selector: 'app-chat-rooms-list',
    templateUrl: './rooms-list.component.html',
    styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
    protected availableRooms$: Observable<IRoom>;

    constructor(protected store: Store<IChatState>, protected dialog: MatDialog) {
        this.availableRooms$ = store.pipe(
            select(selectAvailableRooms)
        );
    }

    ngOnInit() {
        this.store.dispatch(
            new FetchRoomsList()
        );
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(CreateRoomDialogComponent, {
            width: '450px'
        });

        dialogRef.afterClosed().subscribe(name => {
            if (!name) {
                return;
            }

            this.store.dispatch(
                new CreateNewRoomAction({name})
            );
        });
    }
}
