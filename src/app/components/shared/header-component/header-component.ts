import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  darkMode = false;
  activeSection = 'home';

  ngOnInit(): void {
    this.darkMode = localStorage.getItem('portfolio-theme') === 'dark';
    this.applyTheme();
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem('portfolio-theme', this.darkMode ? 'dark' : 'light');
    this.applyTheme();
  }
  
  // data-theme --> styles.scss
  private applyTheme(): void {
    document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
  }

  selectSection_closeMenu(section: string): void {
    this.activeSection = section;
    this.menuOpen = false;
  }
}
