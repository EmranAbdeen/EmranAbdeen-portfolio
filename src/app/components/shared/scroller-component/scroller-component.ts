import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroller-component',
  imports: [],
  templateUrl: './scroller-component.html',
  styleUrl: './scroller-component.scss',
})
export class ScrollerComponent {
  isVisible = false;

  // HostListener replace addEventListener
  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isVisible = window.scrollY > 600;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
