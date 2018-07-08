import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAuthState } from '../../store/auth.reducer';
import { NotificationsService } from 'angular2-notifications';
import { RegisterAttemptAction } from '../../store/auth.actions';

@Component({
    selector: 'auth-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(protected fb: FormBuilder,
                protected router: Router,
                protected store: Store<IAuthState>,
                protected notificationsService: NotificationsService) {

    }

    ngOnInit() {
        this.initRegisterForm();
    }

    initRegisterForm() {
        this.registerForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            password_confirmation: ['', Validators.required]
        });
    }

    goToLogin() {
        return this.router.navigate(['/auth', 'login']);
    }

    register() {
        if (!this.registerForm.valid) {
            this.notificationsService.error('Please fill form with valid data.');

            return;
        }

        if (this.registerForm.value.password !== this.registerForm.value.password_confirmation) {
            this.notificationsService.error('Password confirmation is not equal to password.');

            return;
        }

        return this.store.dispatch(new RegisterAttemptAction({
            email: this.registerForm.value.email,
            password: this.registerForm.value.password
        }));
    }
}