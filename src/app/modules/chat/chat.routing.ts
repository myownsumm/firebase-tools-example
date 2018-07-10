import { Routes } from '@angular/router';

export const chatRoutes: Routes = [
    {
        path: 'chat',
        children: [
            {
                path: 'rooms',
                component: undefined // todo
            }
        ]
    }
];