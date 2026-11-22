import { Component, EventEmitter, Output } from '@angular/core';
import { Projects } from '../../module/projects.vw';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss',
})
export class ProjectsComponent {
  @Output() projectSelected = new EventEmitter<Projects>();

  projects: Projects[] = [
    {
      Id: 1,
      Image: 'images/projects/clinichub.png',
      Title: 'ClinicHub',
      Description:
        'A clinic management system for managing doctors, patients, and appointments with session-based authentication and role-based access control.',
      Technologies: [
        'ASP.NET Core MVC',
        'Entity Framework Core',
        'SQL Server',
        'REST APIs',
        'Bootstrap',
      ],
      Github: 'https://github.com/EmranAbdeen/ClinicHub',
      Overview:
        'An integrated web-based clinic management system designed to simplify daily healthcare operations by providing a centralized platform for managing patients, doctors, appointments, and user accounts.\n \n The project provides an organized environment for clinics, bringing essential management tasks together while ensuring structured access for administrators, doctors, and patients.',
      ProblemStatement:
        'Traditional clinic management methods often lead to disorganized patient records, scheduling conflicts, and inefficient daily operations.\n There is a need for a centralized platform to simplify clinic management and improve coordination between administrators, doctors, and patients.',
      KeyFeatures: [
        'Secure Auth: Session-based login with BCrypt hashing.',
        'Role-Based Access: Super Admin, Admin, Doctor, and Patient permissions.',
        'Doctor & Patient Management: Profiles, specialties, and configurable availability slots.',
        'Appointments: Booking with status tracking (Pending → Completed/Cancelled/Rejected).',
        'Admin Dashboard: Clinic activity overview and key stats.',
        'REST API: Read-only endpoints for doctors, patients, specialties, and appointments.'
      ],
      Video: 'video/projects/ClinicHub-Demo.mp4',
      Skills: [
        {
          Id: 1,
          Category: 'Backend',
          Icon: 'bi bi-server',
          Technologies: ['C#', 'ASP.NET Core MVC', 'SQL Server', 'Entity Framework Core'],
        },
        {
          Id: 2,
          Category: 'Frontend',
          Icon: 'bi bi-window',
          Technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
        },
      ],
    },
  ];

  selectedProject(project: Projects): void {
    this.projectSelected.emit(project);
  }
}
