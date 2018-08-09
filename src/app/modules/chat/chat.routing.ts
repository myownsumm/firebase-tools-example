import { Routes } from '@angular/router';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { AuthGuard } from '../auth/guards/auth-guard.service';

export const chatRoutes: Routes = [
    {
        path: 'chat',
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'rooms',
                pathMatch: 'full'
            },
            {
                path: 'rooms',
                component: RoomsListComponent
            }
        ]
    }
];