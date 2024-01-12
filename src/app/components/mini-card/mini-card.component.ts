import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-mini-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mini-card.component.html',
  styleUrl: './mini-card.component.css'
})
export class MiniCardComponent {
  @Input() title?: string;
  course: any = {};
  selectedLanguage: string = 'pt';

  constructor(private CoursesService: CoursesService,
    private LanguageService: LanguageService) {}

  ngOnInit() {
    if (this.title) {
      this.course = this.CoursesService.getCourseByTitle(this.title);

    }

    this.LanguageService.language$.subscribe((language) => {
      this.selectedLanguage = language;
    });
  }
}
