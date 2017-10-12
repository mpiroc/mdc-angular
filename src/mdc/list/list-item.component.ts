import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import { updateModifiers } from '../utils/modifiers'

@Component({
  selector: 'li[mdc-list-item]',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent implements OnChanges {
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
