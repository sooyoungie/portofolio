import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrl: './about.component.scss',
	standalone: true,
	imports: [FaIconComponent, AnimateOnScrollDirective]
})
export class AboutComponent {
	readonly faFacebook = faFacebookF;
	readonly faInstagram = faInstagram;
	readonly faLinkedin = faLinkedinIn;
	readonly faArrowRight = faArrowRight;

	scrollToSection(sectionId: string): void {
		if (!sectionId) return;
		
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
}