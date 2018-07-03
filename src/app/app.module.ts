import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { routes } from './app.routing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material/material.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './modules/store/root.reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AuthModule,
        MaterialModule,

        StoreModule.forRoot(reducers, {metaReducers}),
        StoreRouterConnectingModule,
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([]),

        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,

        RouterModule.forRoot(routes, {useHash: true})
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {
}
