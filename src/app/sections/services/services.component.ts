import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent, ServiceItem } from '../../shared/components/service-card.component';
import { faCode, faPaintBrush, faSearch } from '@fortawesome/free-solid-svg-icons';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
	selector: 'app-services',
	templateUrl: './services.component.html',
	styleUrl: './services.component.scss',
	standalone: true,
	imports: [CommonModule, ServiceCardComponent, AnimateOnScrollDirective]
})
export class ServicesComponent {
	serviceItems: ServiceItem[] = [
		{
			id: 1,
			name: 'Web Development',
			description: 'Full-stack web applications with modern frameworks and responsive design for optimal user experience.',
			image: 'assets/img/img_svc1.jpeg',
			icon: faCode,
			rating: 4.5
		},
		{
			id: 2,
			name: 'Web Design',
			description: 'Creative and user-centered design solutions that combine aesthetics with functionality.',
			image: 'assets/img/wb_dsgn1.jpg',
			icon: faPaintBrush,
			rating: 4
		},
		{
			id: 3,
			name: 'SEO Optimization',
			description: 'Search engine optimization strategies to improve visibility and drive organic traffic.',
			image: 'assets/img/wb_seo1.jpg',
			icon: faSearch,
			rating: 3.5
		}
	];
}