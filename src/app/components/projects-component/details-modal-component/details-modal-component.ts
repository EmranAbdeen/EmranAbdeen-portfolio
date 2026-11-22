import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Projects } from '../../../module/projects.vw';

@Component({
  selector: 'app-details-modal-component',
  imports: [],
  templateUrl: './details-modal-component.html',
  styleUrl: './details-modal-component.scss',
})
export class DetailsModalComponent {
  @Input() project: Projects | null = null;

  // Stop the video when closing the modal
  @ViewChild('projectVideo')
  private projectVideo?: ElementRef<HTMLVideoElement>;

  closeModal(): void {
    this.projectVideo?.nativeElement.pause();
  }
}
