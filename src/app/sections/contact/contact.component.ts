import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

/**
 * Interface for contact form data
 */
export interface ContactFormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss',
	standalone: true,
	imports: [CommonModule, FormsModule, FaIconComponent, AnimateOnScrollDirective]
})
export class ContactComponent {
	faFacebookF = faFacebookF;
	faInstagram = faInstagram;
	faLinkedinIn = faLinkedinIn;
	faEnvelope = faEnvelope;
	faPhone = faPhone;

	contactForm: ContactFormData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	onSubmit(): void {
		if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
			console.error('Required fields are missing');
			return;
		}
		// TODO: Implement message sending functionality
		console.log('Contact form submitted:', this.contactForm);
	}

	onImageError(event: Event): void {
		if (!event?.target) return;
		
		const img = event.target as HTMLImageElement;
		img.style.display = 'none';
		const parent = img.parentElement;
		if (parent) {
			this.applyFallbackImageStyles(parent);
		}
	}

	private applyFallbackImageStyles(element: HTMLElement): void {
		Object.assign(element.style, {
			background: 'linear-gradient(45deg, #ef4444, #dc2626)',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: 'white',
			fontSize: '18px'
		});
		element.innerHTML = '👤';
	}
}