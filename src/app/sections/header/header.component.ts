import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.scss'],
	standalone: true,
	imports: [
		CommonModule
	]
})

export class HeaderComponent implements OnInit {
	isMenuOpen: boolean = false;
	
	constructor() { }

	ngOnInit() { }

	toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}