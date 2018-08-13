import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { RoomsListComponent } from '../rooms-list/rooms-list.component';

@Component({
    selector: 'app-chat-create-room',
    templateUrl: './create-room-dialog.component.html',
    styleUrls: ['./create-room-dialog.component.scss']
})
export class CreateRoomDialogComponent implements OnInit {
    protected name: string;

    constructor(
        public dialogRef: MatDialogRef<RoomsListComponent>) {
    }

    ngOnInit() {

    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}