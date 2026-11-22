import { Component } from '@angular/core';
import { Experience } from '../../module/experience.vw';

@Component({
  selector: 'app-experience-component',
  imports: [],
  templateUrl: './experience-component.html',
  styleUrl: './experience-component.scss',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      Id: 1,
      Image: 'images/experiences/tuned-applications.png',
      Title: 'Full Stack Developer Intern',
      Company: 'Tuned Applications',
      Description:
        'Developed CRUD APIs using ASP.NET Core Web API, implementing JWT-based authentication and authorization. Built web application features using ASP.NET Core MVC and worked with SQL Server to manage and maintain databases.',
      Technologies: [
        'C#',
        'ASP.NET Core(MVC / Web API)',
        'SQL Server',
        'Entity Framework Core',
        'REST APIs',
        'Angular',
      ],
      StartDate: 'Jun 2026',
      EndDate: 'Sep 2026',
    },
    {
      Id: 2,
      Image: 'images/experiences/dalil.png',
      Title: 'Full Stack Developer Intern',
      Company: 'Dalil Information Technology',
      Description:
        'Backend development using ASP.NET Core Web API, C#, and PostgreSQL, with experience in Onion Architecture and JWT-based authentication and authorization.',
      Technologies: [
        'C#',
        'ASP.NET Core Web API',
        'PostgreSQL',
        'Entity Framework Core',
        'REST APIs',
        'Angular',
      ],
      StartDate: 'Sep 2026',
      EndDate: 'Present',
    },
  ];
}
