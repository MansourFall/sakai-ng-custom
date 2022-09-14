import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
    profileMenuOptions!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) {
        this.profileMenuOptions = [
            {
                label: 'Profile',
                icon: 'pi pi-user',
                routerLink: ['/admin/profile'],
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
                routerLink: ['/auth/login'],
            },
        ];
    }
}
