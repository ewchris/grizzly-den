import { afterNextRender, Component, computed, effect, Signal } from '@angular/core';
import { AppStateService } from '../../../services/app-state.service';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.scss'
})
export class ThemeButtonComponent {
  isDark: Signal<boolean> = computed(() => this.setTheme(this.appState.theme()));
  constructor(
    private appState: AppStateService
  ) {
    afterNextRender(() => {
      this.initTheme();
    });
    effect(() => {
      this.setTheme(this.appState.theme());
    });
  }

  initTheme() {
    if (!this.appState.theme())
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.appState.updateTheme('dark');
        this.setTheme('dark');
      } else {
        this.appState.updateTheme('light');
        this.setTheme('light');
      }
    else {
      this.appState.updateTheme(this.appState.theme());
      this.setTheme(this.appState.theme());
    }
  }

  setTheme(theme: string): boolean {
    return theme == 'dark' ? true : false;
  }

  toggleTheme() {
    if (this.isDark())
      this.appState.updateTheme('light');
    else
      this.appState.updateTheme('dark');
  }
}
