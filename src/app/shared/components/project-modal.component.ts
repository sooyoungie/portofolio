import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Project } from './project-card.component';

@Component({
	selector: 'app-project-modal',
	templateUrl: './project-modal.component.html',
	styleUrl: './project-modal.component.scss',
	standalone: true,
	imports: [CommonModule, FaIconComponent]
})
export class ProjectModalComponent {
	@Input() isOpen = false;
	@Input() project: Project | null = null;
	@Input() isMobile = false;
	@Output() closeModal = new EventEmitter<void>();

	faClose = faXmark;
	isClosing = false;

	onClose(): void {
		if (this.isMobile) {
			this.isClosing = true;
			setTimeout(() => {
				this.closeModal.emit();
				this.isClosing = false;
			}, 400);
		} else {
			this.closeModal.emit();
		}
	}
}