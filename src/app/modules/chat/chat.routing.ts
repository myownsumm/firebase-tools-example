import { Routes } from '@angular/router';
import { RoomsComponent } from './components/room/rooms.component';
import { AuthGuard } from '../auth/guards/auth-guard.service';

export const chatRoutes: Routes = [
    {
        path: 'chat',
        children: [
            {
                path: '',
                redirectTo: 'rooms',
                pathMatch: 'full'
            },
            {
                path: 'rooms',
                component: RoomsComponent,
                canActivate: [AuthGuard]
            }
        ]
    }
];