import { Component } from '@angular/core';
import { HeaderComponent } from '../sections/header/header.component';
import { AboutComponent } from '../sections/about/about.component';
import { StackComponent } from '../sections/stack/stack.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { ServicesComponent } from '../sections/services/services.component';
import { ContactComponent } from '../sections/contact/contact.component';
import { FooterComponent } from '../sections/footer/footer.component';
import { ProjectModalComponent } from '../shared/components/project-modal.component';
import { Project } from '../shared/components/project-card.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	standalone: true,
	imports: [
		HeaderComponent,
		AboutComponent,
		StackComponent,
		ProjectsComponent,
		ServicesComponent,
		ContactComponent,
		FooterComponent,
		ProjectModalComponent
	]
})
export class HomeComponent {
	isProjectModalOpen = false;
	selectedProject: Project | null = null;

	get isMobile(): boolean {
		return window.innerWidth <= 768;
	}

	onProjectClick(project: Project): void {
		this.selectedProject = project;
		this.isProjectModalOpen = true;
		document.body.style.overflow = 'hidden';
	}

	onCloseProjectModal(): void {
		this.isProjectModalOpen = false;
		this.selectedProject = null;
		document.body.style.overflow = 'auto';
	}
}