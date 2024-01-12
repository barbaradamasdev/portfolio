import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>('pt');
  public language$ = this.languageSubject.asObservable();

  setLanguage(language: string): void {
    localStorage.setItem('selectedLanguage', language);
    this.languageSubject.next(language);
  }

  getLanguage(): string {
    return localStorage.getItem('selectedLanguage') || 'pt';
  }
}
