import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .p-password input {
                width: 100%;
                padding: 1rem;
            }

            :host ::ng-deep .pi-eye {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }

            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }

            :host ::ng-deep .p-password .p-password-input {
                padding: 0.5rem;
            }
        `,
    ],
})
export class LoginComponent {
    loading = false;
    email: string = '';
    password: string = '';

    constructor(public layoutService: LayoutService, private router: Router) {}

    onSignIn() {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
            this.router.navigate(['/admin']);
        }, 1000);
    }
}
