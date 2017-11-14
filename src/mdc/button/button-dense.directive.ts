import {
  Directive,
  ElementRef,
  HostBinding,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: 'button[mdc-button][mdc-button]'
})
export class ButtonDenseDirective {
  constructor(
    renderer: Renderer2,
    nativeElementRef: ElementRef,
  ) {
    renderer.addClass(nativeElementRef.nativeElement, 'mdc-button--dense')
  }
}
