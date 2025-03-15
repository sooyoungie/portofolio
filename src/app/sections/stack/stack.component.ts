import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faReact, faVuejs, faDocker, faNodeJs } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-stack',
	templateUrl: 'stack.component.html',
	styleUrls: ['stack.component.scss'],
	standalone: true,
	imports: [FontAwesomeModule]
})

export class StackComponent implements OnInit {

	faAngular = faAngular;
	faReact = faReact;
	faVuejs = faVuejs;
	faDocker = faDocker;
	faNodeJs = faNodeJs;

	constructor() { }

	ngOnInit() { }
}