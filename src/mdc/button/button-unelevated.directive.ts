import {
  Directive,
  ElementRef,
  HostBinding,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: 'button[mdc-button][unelevated]'
})
export class ButtonUnelevatedDirective {
  constructor(
    renderer: Renderer2,
    nativeElementRef: ElementRef,
  ) {
    renderer.addClass(nativeElementRef.nativeElement, 'mdc-button--unelevated')
  }
}
