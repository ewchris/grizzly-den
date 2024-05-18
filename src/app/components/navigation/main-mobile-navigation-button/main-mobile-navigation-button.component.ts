import { Component, model } from '@angular/core';

@Component({
  selector: 'app-main-mobile-navigation-button',
  standalone: true,
  imports: [],
  templateUrl: './main-mobile-navigation-button.component.html',
  styleUrl: './main-mobile-navigation-button.component.scss'
})
export class MainMobileNavigationButtonComponent {
  isMenuOpen = model<boolean>(false);

  setMenuState() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
