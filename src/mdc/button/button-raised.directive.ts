import {
  Directive,
  ElementRef,
  HostBinding,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: 'button[mdc-button][raised]'
})
export class ButtonRaisedDirective {
  constructor(
    renderer: Renderer2,
    nativeElementRef: ElementRef,
  ) {
    renderer.addClass(nativeElementRef.nativeElement, 'mdc-button--raised')
  }
}
