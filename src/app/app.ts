import { Component } from '@angular/core';
import { HeaderComponent } from './components/shared/header-component/header-component';
import { HeroComponent } from './components/hero-component/hero-component';
import { AboutComponent } from './components/about-component/about-component';
import { SkillsComponent } from './components/skills-component/skills-component';
import { FooterComponent } from './components/shared/footer-component/footer-component';
import { ProjectsComponent } from './components/projects-component/projects-component';
import { ExperienceComponent } from './components/experience-component/experience-component';
import { ScrollerComponent } from './components/shared/scroller-component/scroller-component';
import { ContactModalComponent } from './components/contact-modal-component/contact-modal-component';
import { DetailsModalComponent } from './components/projects-component/details-modal-component/details-modal-component';
import { Projects } from './module/projects.vw';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    FooterComponent,
    ScrollerComponent,
    ContactModalComponent,
    DetailsModalComponent
],
})
export class App {
  selectedProject: Projects | null = null;
}
