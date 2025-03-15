import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-about',
	templateUrl: 'about.component.html',
	styleUrls: ['about.component.scss'],
	standalone: true,
	imports: [FontAwesomeModule]
})

export class AboutComponent implements OnInit {
	faFacebook = faFacebookF;
	faInstagram = faInstagram;
	faLinkedin = faLinkedinIn;
	faArrowRight = faArrowRight;

	constructor() { }

	ngOnInit() { }
}