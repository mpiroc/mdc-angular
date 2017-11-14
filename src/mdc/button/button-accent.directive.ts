import {
  Directive,
  ElementRef,
  HostBinding,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: 'button[mdc-button][accent]'
})
export class ButtonAccentDirective {
  constructor(
    renderer: Renderer2,
    nativeElementRef: ElementRef,
  ) {
    renderer.addClass(nativeElementRef.nativeElement, 'mdc-button--accent')
  }
}
