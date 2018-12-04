import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input('appBetterHightlight') highlightColor: string = 'yellow';

    @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }
    ngOnInit() {
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor=this.defaultColor;
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
       // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
       // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;

    }

    @HostListener('click') click(eventData: Event) {
      //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
        this.backgroundColor = 'green';

    }
}
