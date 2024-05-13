import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-desktop-navigation',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './main-desktop-navigation.component.html',
  styleUrl: './main-desktop-navigation.component.scss'
})
export class MainDesktopNavigationComponent {

}
