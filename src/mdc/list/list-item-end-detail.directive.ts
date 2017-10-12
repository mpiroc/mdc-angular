import {
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core'
import { updateModifiers } from '../utils/modifiers'

@Directive({
  selector: '[mdc-list-item-end-detail]',
})
export class ListItemEndDetailDirective {
  constructor(renderer: Renderer2, root: ElementRef) {
    renderer.addClass(root.nativeElement, 'mdc-list-end-detail')
  }
}
