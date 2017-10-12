import {
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core'
import { updateModifiers } from '../utils/modifiers'

@Directive({
  selector: '[mdc-list-item-start-detail]',
})
export class ListItemStartDetailDirective {
  constructor(renderer: Renderer2, root: ElementRef) {
    renderer.addClass(root.nativeElement, 'mdc-list-item__start-detail')
  }
}
