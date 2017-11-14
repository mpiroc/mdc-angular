import {
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: 'button[mdc-button][primary]'
})
export class ButtonPrimaryDirective {
  constructor(renderer: Renderer2, root: ElementRef) {
    renderer.addClass(root.nativeElement, 'mdc-button--primary')
  }
}
