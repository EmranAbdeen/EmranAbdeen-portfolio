import { Component } from '@angular/core';
import { Skills } from '../../module/skills.vw';

@Component({
  selector: 'app-skills-component',
  imports: [],
  templateUrl: './skills-component.html',
  styleUrl: './skills-component.scss',
})
export class SkillsComponent {
  skills: Skills[] = [
    {
      Id:1,
      Image: 'images/skills/backend.png',
      Title: 'Backend Development',
      Description: 'C#, ASP.NET Core (MVC & Web API), LINQ, Entity Framework Core, RESTful APIs.',
    },
    {
      Id:2,
      Image: 'images/skills/database.png',
      Title: 'Databases',
      Description: 'SQL Server, PostgreSQL.',
    },
    {
      Id:3,
      Image: 'images/skills/frontend.jpg',
      Title: 'Tools & Frontend',
      Description: 'HTML5, CSS3, Bootstrap 5, JavaScript, TypeScript, Angular, Git/GitHub, Postman, and Swagger.'
    },
    {
      Id:4,
      Image: 'images/skills/architecture.png',
      Title: 'Architecture',
      Description: ' Onion Architecture, SOLID Principles, OOP, Dependency Injection (DI)',
    },
  ];
}
