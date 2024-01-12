import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
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
