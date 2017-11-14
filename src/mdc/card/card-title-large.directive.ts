import {
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: 'section[mdc-card-title][large]',
})
export class CardTitleLargeDirective {
  constructor(renderer: Renderer2, root: ElementRef) {
    renderer.addClass(root.nativeElement, 'mdc-card__title--large')
  }
}
