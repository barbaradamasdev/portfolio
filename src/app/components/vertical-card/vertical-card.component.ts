import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-vertical-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vertical-card.component.html',
  styleUrl: './vertical-card.component.css'
})
export class VerticalCardComponent {

  @Input() title?:string;
  project: any = {};
  @Input() invert: boolean = false;


  constructor(private ProjectsService: ProjectsService) {}

  ngOnInit() {
    if (this.title) {
      this.project = this.ProjectsService.getProjectByTitle(this.title);
    }
  }


}
