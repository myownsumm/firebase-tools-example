import { Routes } from '@angular/router';
import { RoomsComponent } from './components/room/rooms.component';

export const chatRoutes: Routes = [
    {
        path: 'chat',
        children: [
            {
                path: 'rooms',
                component: RoomsComponent
            }
        ]
    }
];