import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ServiceItem {
	id: number;
	name: string;
	description: string;
	image: string;
	icon: IconDefinition;
	rating: number; // 1-5, supports 0.5 increments
}

@Component({
	selector: 'app-service-card',
	templateUrl: './service-card.component.html',
	styleUrl: './service-card.component.scss',
	standalone: true,
	imports: [CommonModule, FaIconComponent]
})
export class ServiceCardComponent implements OnInit, AfterViewInit {
	@Input() service!: ServiceItem;

	fullStars: number[] = [];
	hasHalfStar = false;
	emptyStars: number[] = [];

	ngOnInit(): void {
		this.calculateStars();
	}

	private calculateStars(): void {
		const rating = this.service.rating;
		this.fullStars = Array(Math.floor(rating)).fill(0);
		this.hasHalfStar = rating % 1 !== 0;
		const totalStars = 5;
		const filledStars = Math.ceil(rating);
		this.emptyStars = Array(totalStars - filledStars).fill(0);
	}

	ngAfterViewInit(): void {
		try {
			const descElement = document.querySelector(`#desc-${this.service.id}`) as HTMLElement;
			if (descElement && descElement.scrollHeight > descElement.clientHeight) {
				descElement.classList.add('scrolling');
			}
		} catch (error) {
			console.warn('Failed to setup scrolling animation:', error);
		}
	}

	onImageError(event: Event): void {
		if (!event?.target) return;
		
		try {
			const img = event.target as HTMLImageElement;
			img.style.display = 'none';
			const parent = img.parentElement;
			if (parent) {
				parent.classList.add('image-error');
			}
		} catch (error) {
			console.warn('Failed to handle image error:', error);
		}
	}
}