import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../sections/header/header.component';
import { AboutComponent } from '../sections/about/about.component';
import { StackComponent } from '../sections/stack/stack.component';

@Component({
	selector: 'app-home',
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.scss'],
	standalone: true,
	imports: [
		HeaderComponent,
		AboutComponent,
		StackComponent
	]
})

export class HomeComponent implements OnInit {
	constructor() { }

	ngOnInit() { }
}