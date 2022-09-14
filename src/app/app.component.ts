import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ThemeService } from './layout/service/app.theme.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    menuMode = 'static';

    constructor(
        private primengConfig: PrimeNGConfig,
        private themeService: ThemeService
    ) {}

    ngOnInit() {
        this.themeService.changeTheme('fluent-light', 'light');
        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';
    }
}
