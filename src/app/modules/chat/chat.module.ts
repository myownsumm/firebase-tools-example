import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { chatRoutes } from './chat.routing';
import { RoomsComponent } from './components/room/rooms.component';
import { ChatEffectsService } from './store/chat.effects';
import { chatReducer } from './store/chat.reducer';

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
        RoomsComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: []
})
export class ChatModule {
}