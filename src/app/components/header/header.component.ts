import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit  {
  isMenuOpen:boolean = false;
  isPcVersion:boolean = window.innerWidth > 985;
  isDarkMode:boolean = localStorage.getItem('dark') !== null;
  selectedLanguage: string = 'pt';


  constructor(private LanguageService: LanguageService) {}

  ngOnInit() {
    this.loadTheme();
  }

  changeLanguage(event: Event): void {
    if (event.target) {
      const selectedLanguage = (event.target as HTMLSelectElement).value;
      this.LanguageService.setLanguage(selectedLanguage);
    }
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isPcVersion = window.innerWidth > 1100;
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark');

    const darkMode = localStorage.getItem('dark');
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('dark', '1');
    } else {
      localStorage.removeItem('dark');
    }
  }

  loadTheme() {
    const darkMode = localStorage.getItem('dark');
    if (darkMode) {
      document.body.classList.add('dark');
    }
  }

}
