import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import AOS from 'aos';

bootstrapApplication(App).catch((err) => console.error(err));

// ! Initialize AOS (Animate On Scroll)
// Animate elements when they enter the viewport during scrolling.
AOS.init({
  duration: 800,     // Animation duration
  once: true,        // Run animation only once
  offset: 100,       // Trigger animation 100px before the element enters the viewport
});
