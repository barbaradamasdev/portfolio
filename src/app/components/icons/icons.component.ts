import { Component, Input } from '@angular/core';
import { IconsService } from '../../services/icons.service';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.css'
})
export class IconsComponent {
  @Input() title?: string;
  icon: any = {};

  constructor(private IconsService: IconsService) {}

  ngOnInit() {
    if (this.title) {
      this.icon = this.IconsService.getIconByTitle(this.title);
    }
  }
}
