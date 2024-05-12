import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive],
  exportAs: 'MainHeaderComponent',
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {
  myName = 'Evan Christopher'
}
