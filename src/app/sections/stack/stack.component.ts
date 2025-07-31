import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faAngular, faReact, faVuejs, faDocker, faNodeJs } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-stack',
	templateUrl: './stack.component.html',
	styleUrl: './stack.component.scss',
	standalone: true,
	imports: [FaIconComponent]
})
export class StackComponent {
	readonly faAngular = faAngular;
	readonly faReact = faReact;
	readonly faVuejs = faVuejs;
	readonly faDocker = faDocker;
	readonly faNodeJs = faNodeJs;
}