import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	standalone: true,
	imports: [CommonModule]
})
export class HeaderComponent implements OnInit, OnDestroy {
	isMenuOpen = false;
	scrollProgress = 0;
	isScrolled = false;
	private scrollTimeout: ReturnType<typeof setTimeout> | null = null;

	ngOnInit(): void {
		this.updateScrollProgress();
	}

	ngOnDestroy(): void {
		if (this.scrollTimeout) {
			clearTimeout(this.scrollTimeout);
		}
	}

	@HostListener('window:scroll', [])
	onWindowScroll(): void {
		if (this.scrollTimeout) return;
		
		this.scrollTimeout = setTimeout(() => {
			this.updateScrollProgress();
			this.isScrolled = window.scrollY > 50;
			this.scrollTimeout = null;
		}, 16);
	}

	private updateScrollProgress(): void {
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		this.scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
	}

	toggleMenu(): void {
		this.isMenuOpen = !this.isMenuOpen;
	}

	scrollToSection(sectionId: string): void {
		if (!sectionId) return;
		
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			this.isMenuOpen = false;
		}
	}
}