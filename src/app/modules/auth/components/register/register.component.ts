import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'auth-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(protected fb: FormBuilder, protected router: Router) {

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
        // todo
    }
}