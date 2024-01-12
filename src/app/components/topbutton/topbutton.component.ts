import { Component } from '@angular/core';

@Component({
  selector: 'app-topbutton',
  standalone: true,
  imports: [],
  templateUrl: './topbutton.component.html',
  styleUrl: './topbutton.component.css'
})
export class TopbuttonComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
