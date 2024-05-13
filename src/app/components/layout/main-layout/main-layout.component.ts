import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from '../main-header/main-header.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    MainHeaderComponent,
    RouterOutlet
  ],
  exportAs: 'MainLayoutComponent',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
