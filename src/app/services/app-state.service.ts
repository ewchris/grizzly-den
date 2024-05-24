import { EventEmitter, Injectable, signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public themeChanged: EventEmitter<string> = new EventEmitter();
  theme = signal<string>(this.localStorageSvc.get('theme'));

  constructor(
    private localStorageSvc: LocalStorageService
  ) { }

  updateTheme(mode: string) {
    if (mode === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else if (mode === 'dark') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
    this.theme.set(mode);
  }
}
