import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { chatRoutes } from './chat.routing';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { ChatEffectsService } from './store/chat.effects';
import { chatReducer } from './store/chat.reducer';
import { RoomItemComponent } from './components/room-item/room-item.component';
import { RoomsService } from './services/rooms.service';
import { AngularFirestore } from 'angularfire2/firestore';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(chatRoutes),

        StoreModule.forFeature('chat', chatReducer),
        EffectsModule.forFeature([
            ChatEffectsService
        ]),
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        RoomsListComponent,
        RoomItemComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        RoomsService,
        AngularFirestore
    ]
})
export class ChatModule {
}