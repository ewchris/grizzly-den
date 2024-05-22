import { EventEmitter, Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public themeChanged: EventEmitter<string> = new EventEmitter();

  constructor(
    private localStorageSvc: LocalStorageService
  ) {

  }

  getTheme(): string | null | undefined {
    return this.localStorageSvc.get('theme');
  }

  private setTheme(mode: string) {
    this.localStorageSvc.set('theme', mode);
    this.themeChanged.emit(mode);
  }

  updateTheme(mode: string) {
    if (mode === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      this.setTheme('light');
    } else if (mode === 'dark') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      this.setTheme('dark');
    }
  }
}
