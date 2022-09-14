import { Injectable } from '@angular/core';
import { replaceThemeLink } from '../utils/layout.functions';
import { LayoutService } from './app.layout.service';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    constructor(private layoutService: LayoutService) {}

    changeTheme(theme: string, colorScheme: string) {
        const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
        const newHref = themeLink
            .getAttribute('href')!
            .replace(this.layoutService.config.theme, theme);
        this.layoutService.config.colorScheme;
        replaceThemeLink(newHref, () => {
            this.layoutService.config.theme = theme;
            this.layoutService.config.colorScheme = colorScheme;
            this.layoutService.onConfigUpdate();
        });
    }
}
