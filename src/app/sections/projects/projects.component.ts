import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent, Project } from '../../shared/components/project-card.component';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss',
	standalone: true,
	imports: [CommonModule, ProjectCardComponent, AnimateOnScrollDirective]
})
export class ProjectsComponent {
	@Output() projectClick = new EventEmitter<Project>();

	projects: Project[] = [
		{ id: 1, name: 'E-Commerce Platform', description: 'Modern shopping experience with seamless checkout', image: '/assets/img/project-placeholder-1.jpg', technologies: ['Angular', 'Node.js', 'MongoDB'], details: 'Full-stack e-commerce solution with advanced features including real-time inventory, payment processing, and user analytics.' },
		{ id: 2, name: 'Task Management App', description: 'Collaborative workspace for team productivity', image: '/assets/img/project-placeholder-2.jpg', technologies: ['React', 'Firebase', 'TypeScript'], details: 'Real-time collaboration tool with drag-and-drop interface, team chat, and progress tracking capabilities.' },
		// { id: 3, name: 'Portfolio Website', description: 'Creative showcase with stunning animations', image: '/assets/img/project-placeholder-3.jpg', technologies: ['Vue.js', 'GSAP', 'Tailwind'], details: 'Interactive portfolio featuring smooth animations, responsive design, and optimized performance.' },
		// { id: 4, name: 'Mobile Banking App', description: 'Secure financial transactions on the go', image: '/assets/img/project-placeholder-4.jpg', technologies: ['React Native', 'Express', 'PostgreSQL'], details: 'Cross-platform banking application with biometric authentication and real-time transaction monitoring.' },
		{ id: 5, name: 'Weather Dashboard', description: 'Real-time weather tracking with forecasts', image: '/assets/img/project-placeholder-5.jpg', technologies: ['JavaScript', 'API', 'CSS3'], details: 'Interactive weather application with location-based forecasts and detailed meteorological data.' },
		// { id: 6, name: 'Social Media App', description: 'Connect and share with friends worldwide', image: '/assets/img/project-placeholder-6.jpg', technologies: ['Flutter', 'Firebase', 'Dart'], details: 'Cross-platform social networking app with real-time messaging and media sharing capabilities.' }
	];

	onProjectClick(project: Project): void {
		this.projectClick.emit(project);
	}
}