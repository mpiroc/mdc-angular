import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: '[mdc-drawer-selected]'
})
export class DrawerSelectedDirective implements OnInit {
  constructor(private renderer: Renderer2, private root: ElementRef) {
  }

  ngOnInit() {
    this.renderer.addClass(this.root.nativeElement, 'mdc-permanent-drawer--selected')
  }
}
