import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
	selector: '[animateOnScroll]',
	standalone: true
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
	private observer!: IntersectionObserver;

	constructor(private el: ElementRef) {}

	ngOnInit(): void {
		this.el.nativeElement.classList.add('animate-hidden');
		
		this.observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting && entry.target === this.el.nativeElement) {
						entry.target.classList.add('animate-visible');
      // amazonq-ignore-next-line
						entry.target.classList.remove('animate-hidden');
					}
				});
			},
			{ threshold: 0.1 }
		);

		this.observer.observe(this.el.nativeElement);
	}

	ngOnDestroy(): void {
		if (this.observer) {
			this.observer.disconnect();
		}
	}
}