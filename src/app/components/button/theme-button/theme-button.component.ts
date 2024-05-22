import { afterNextRender, Component } from '@angular/core';
import { AppStateService } from '../../../services/app-state.service';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.scss'
})
export class ThemeButtonComponent {
  theme?: string;
  isDark: boolean = true;
  constructor(
    private appState: AppStateService
  ) {
    afterNextRender(() => {
      this.initTheme();
      this.appState.themeChanged.subscribe({
        next: (response: string) => {
          this.setTheme(response);
        }
      });
    });
  }

  initTheme() {
    this.theme = this.appState.getTheme() as string;
    if (!this.theme)
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.appState.updateTheme('dark');
        this.setTheme('dark');
      } else {
        this.appState.updateTheme('light');
        this.setTheme('light');
      }
    else {
      this.appState.updateTheme(this.theme);
      this.setTheme(this.theme);
    }
  }

  setTheme(theme: string) {
    if (theme === 'dark') {
      this.isDark = true;
    } else {
      this.isDark = false;
    }
    this.theme = this.appState.getTheme() as string;
  }

  toggleTheme() {
    if (this.isDark)
      this.appState.updateTheme('light');
    else
      this.appState.updateTheme('dark');
  }
}
