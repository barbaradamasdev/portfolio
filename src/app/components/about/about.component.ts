import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AboutTextService } from '../../services/about-text.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnDestroy {
  language?: string;
  aboutText: any;
  private ngUnsubscribe = new Subject<void>();

  constructor(
    private aboutTextService: AboutTextService,
    private LanguageService: LanguageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.language = this.getLanguageFromLocalStorage();
    this.aboutText = this.aboutTextService.getAboutText();

    this.LanguageService.language$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((language) => {
        console.log('Language updated:', language);
        this.language = language;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  isLanguageDefined(): boolean {
    return !!this.language;
  }

  private getLanguageFromLocalStorage(): string {
    return localStorage.getItem('selectedLanguage') || 'pt';
  }
}
