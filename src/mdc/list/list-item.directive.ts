import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core'
import { updateModifiers } from '../utils/modifiers'

@Directive({
  selector: '[mdc-list-item]',
})
export class ListItemDirective implements OnChanges {
  @Input() twoLine: boolean
  @Input() dense: boolean

  constructor(private renderer: Renderer2, private root: ElementRef) {
    renderer.addClass(root.nativeElement, 'mdc-list-item')
  }

  ngOnChanges(changes: SimpleChanges) {
    updateModifiers(
      this.renderer,
      this.root,
      changes,
      'mdc-list-item',
      {
        'twoLine': 'two-line',
        'dense': 'dense',
      },
    )
  }
}
