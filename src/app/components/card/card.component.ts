import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { ProjectsService } from '../../services/projects.service';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title?:string;
  project: any = {};
  @Input() invert: boolean = false;
  language?: string;
  private ngUnsubscribe = new Subject<void>();

  constructor(
    private ProjectsService: ProjectsService,
    private LanguageService: LanguageService) {
      this.LanguageService.language$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((language) => {
        this.language = language;
      });
    }

  ngOnInit() {
    if (this.title) {
      this.project = this.ProjectsService.getProjectByTitle(this.title);
    }
    this.language = this.LanguageService.getLanguage();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  isLanguageAndDescriptionDefined(): boolean {
    return !!this.language && !!this.project?.Description;
  }
}
