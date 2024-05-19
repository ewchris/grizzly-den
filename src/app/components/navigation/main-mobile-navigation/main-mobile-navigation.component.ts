import { Component, model } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AvatarComponent } from '../../media/avatar/avatar.component';

@Component({
  selector: 'app-main-mobile-navigation',
  standalone: true,
  imports: [
    AvatarComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './main-mobile-navigation.component.html',
  styleUrl: './main-mobile-navigation.component.scss'
})
export class MainMobileNavigationComponent {
  isMenuOpen = model<boolean>(false);

  setMenuState() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
