import { Component, signal } from '@angular/core';
import { MainDesktopNavigationComponent } from '../../navigation/main-desktop-navigation/main-desktop-navigation.component';
import { MainMobileNavigationComponent } from '../../navigation/main-mobile-navigation/main-mobile-navigation.component';
import { MainMobileNavigationButtonComponent } from '../../navigation/main-mobile-navigation-button/main-mobile-navigation-button.component';
import { AvatarComponent } from '../../media/avatar/avatar.component';
import { RouterLink } from '@angular/router';
import { ThemeButtonComponent } from '../../button/theme-button/theme-button.component';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    AvatarComponent,
    MainDesktopNavigationComponent,
    MainMobileNavigationComponent,
    MainMobileNavigationButtonComponent,
    RouterLink,
    ThemeButtonComponent
  ],
  exportAs: 'MainHeaderComponent',
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {
  isMenuOpen = signal(false);
}
