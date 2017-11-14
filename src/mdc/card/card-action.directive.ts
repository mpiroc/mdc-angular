import {
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: '[mdc-card-action]',
})
export class CardActionDirective {
  constructor(renderer: Renderer2, root: ElementRef) {
    renderer.addClass(root.nativeElement, 'mdc-card__action')
  }
}
