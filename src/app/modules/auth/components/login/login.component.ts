import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { IAuthState } from '../../store/auth.reducer';
import { LogInAttemptAction } from '../../store/auth.actions';


@Component({
    selector: 'app-auth-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;


    constructor(private fb: FormBuilder, protected store: Store<IAuthState>) {
    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }


    login() {
        if (!this.loginForm.valid) {
            console.error('Form is not valid');

            return;
        }

        const email = this.loginForm.get('email').value;
        const password = this.loginForm.get('password').value;

        this.store.dispatch(new LogInAttemptAction({email, password}));

        // this.loginForm.reset();
    }
}
