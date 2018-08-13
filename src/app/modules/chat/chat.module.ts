import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { chatRoutes } from './chat.routing';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { ChatEffectsService } from './store/chat.effects';
import { chatReducer } from './store/chat.reducer';
import { RoomItemComponent } from './components/room-item/room-item.component';
import { RoomsService } from './services/rooms.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { CreateRoomDialogComponent } from './components/create-room/create-room-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(chatRoutes),

        StoreModule.forFeature('chat', chatReducer),
        EffectsModule.forFeature([
            ChatEffectsService
        ]),
        MaterialModule,
        ReactiveFormsModule,

        FormsModule
    ],
    declarations: [
        RoomsListComponent,
        RoomItemComponent,
        CreateRoomDialogComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        RoomsService,
        AngularFirestore
    ],

    entryComponents: [
        CreateRoomDialogComponent
    ]
})
export class ChatModule {
}