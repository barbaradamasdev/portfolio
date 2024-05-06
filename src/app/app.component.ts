import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TopbuttonComponent } from "./components/topbutton/topbutton.component";
import { CardComponent } from "./components/card/card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, AboutComponent, ProjectsComponent, ExperienceComponent, ContactComponent, FooterComponent, TopbuttonComponent, CardComponent]
})
export class AppComponent {
  title = 'Barbara Damasceno - Portfolio';
}
