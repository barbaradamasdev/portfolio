import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ProjectsService } from '../../services/projects.service';
import { CardComponent } from "../card/card.component";
import { VerticalCardComponent } from "../vertical-card/vertical-card.component";

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    imports: [CardComponent, CommonModule, VerticalCardComponent]
})
export class ProjectsComponent {
  projects : any[] = [];
  showAllProjects: boolean = false;
  selectedLanguage: string = 'pt';
  selectedTechnology: string = '';
  selectedTechButton: string = '';

  constructor(
    private ProjectsService: ProjectsService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
   this.projects = this.ProjectsService.projects;

   this.languageService.language$.subscribe((language) => {
    this.selectedLanguage = language;
  });
  }

  toggleProjects() {
    this.showAllProjects = !this.showAllProjects;
  }

  getAllTechnologies(): string[] {
    let allTech: string[] = [];
    this.projects.forEach(project => {
      project.Technologies.forEach((tech: string) => {
        if (!allTech.includes(tech)) {
          allTech.push(tech);
        }
      });
    });
    return allTech;
  }

  selectTechnology(tech: string) {
    if (tech === '') {
      this.selectedTechnology = '';
      this.selectedTechButton = '';
    } else {
      this.selectedTechnology = tech;
      this.selectedTechButton = tech;
    }
  }

  getFilteredProjects(): any[] {
    if (this.selectedTechnology) {
      return this.projects.filter(project => project.Technologies.includes(this.selectedTechnology));
    }
    return this.projects;
  }
}
