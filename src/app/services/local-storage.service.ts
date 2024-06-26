import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  storage: Storage | null;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.storage = isPlatformBrowser(this.platformId) ? localStorage : null;
  }
  get(key: string): string {
    const item = this.storage?.getItem(key);
    if (!item) {
      return '';
    } else
      return item;
  }
  set(key: string, value: string) {
    this.storage?.setItem(key, value);
  }
}
