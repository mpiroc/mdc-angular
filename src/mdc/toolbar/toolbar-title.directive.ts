import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: '[mdc-toolbar-title]'
})
export class ToolbarTitleDirective implements OnInit {
  constructor(private renderer: Renderer2, private root: ElementRef) {
  }

  ngOnInit() {
    this.renderer.addClass(this.root.nativeElement, 'mdc-toolbar__title')
  }
}
