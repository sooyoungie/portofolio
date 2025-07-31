import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
	standalone: true,
	imports: [CommonModule, FaIconComponent]
})
export class FooterComponent {
	faHeart = faHeart;
	currentYear = new Date().getFullYear();
}