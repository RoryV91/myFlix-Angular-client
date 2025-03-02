import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme = new BehaviorSubject<string>('light-theme');
  currentTheme: Observable<string> = this._theme.asObservable();

  constructor() { }

  setTheme(theme: string): void {
    this._theme.next(theme);
  }
}
