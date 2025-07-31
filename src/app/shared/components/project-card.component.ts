import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
	id: number;
	name: string;
	description: string;
	image: string;
	technologies: string[];
	details: string;
	imageError?: boolean;
}

@Component({
	selector: 'app-project-card',
	templateUrl: './project-card.component.html',
	styleUrl: './project-card.component.scss',
	standalone: true,
	imports: [CommonModule]
})
export class ProjectCardComponent {
	@Input() project!: Project;
	@Output() cardClick = new EventEmitter<Project>();

	onImageError(event: Event): void {
		if (!event?.target) return;
		
		const img = event.target as HTMLImageElement;
		this.project.imageError = true;
		img.style.display = 'none';
	}

	onClick(): void {
		this.cardClick.emit(this.project);
	}
}