import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeButtonComponent } from '../../button/theme-button/theme-button.component';

@Component({
  selector: 'app-main-desktop-navigation',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ThemeButtonComponent
  ],
  templateUrl: './main-desktop-navigation.component.html',
  styleUrl: './main-desktop-navigation.component.scss'
})
export class MainDesktopNavigationComponent {
  constructor() { }
}