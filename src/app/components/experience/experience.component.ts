import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { IconsService } from '../../services/icons.service';
import { LanguageService } from '../../services/language.service';
import { IconsComponent } from '../icons/icons.component';
import { MiniCardComponent } from "../mini-card/mini-card.component";

@Component({
    selector: 'app-experience',
    standalone: true,
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css',
    imports: [MiniCardComponent, CommonModule, IconsComponent]
})
export class ExperienceComponent {
  courses : any[] = [];
  icons: any = {};
  selectedLanguage: string = 'pt';

  constructor(
    private CoursesService: CoursesService,
    private IconsService: IconsService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.courses = this.CoursesService.courses;
    this.icons = this.IconsService.icons;

    this.languageService.language$.subscribe((language) => {
    this.selectedLanguage = language;
  });
  }
}
