import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('animateInViewport', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      state('out', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition('out => in', animate('0.5s')),
    ]),
  ]
})
export class HomeComponent {
  @ViewChild('yourElement') element!: ElementRef;
  elementInViewport = false;

  constructor(private scroll: ScrollDispatcher) {
    this.scroll.ancestorScrolled(this.element).subscribe(() => {
      this.elementInViewport = true;
    });
  }
}
