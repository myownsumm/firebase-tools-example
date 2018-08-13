import { Component, Input, OnInit } from '@angular/core';
import { IRoom } from '../../../../../typings';


@Component({
    selector: 'app-chat-room-item',
    templateUrl: './room-item.component.html',
    styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements OnInit {
    @Input() room: IRoom;

    ngOnInit() {
    }

    enter() {
        console.log(this.room);
    }
}
