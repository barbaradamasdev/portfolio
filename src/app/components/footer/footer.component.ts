import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  selectedLanguage: string = 'pt';

  constructor(
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.languageService.language$.subscribe((language) => {
    this.selectedLanguage = language;
  });
  }
}
