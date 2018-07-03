import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routes } from './auth.routing';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { authReducer } from './store/auth.reducer';
import { AuthEffectsService } from './store/auth.effects';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),

        StoreModule.forFeature('auth', authReducer),
        EffectsModule.forFeature([
            AuthEffectsService
        ]),
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        // AuthService,
        // AuthGuard
    ]
})
export class AuthModule {
}