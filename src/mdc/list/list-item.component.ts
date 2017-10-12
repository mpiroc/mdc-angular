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
  selector: 'mdc-list-item',
  templateUrl: './list-item.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent implements OnChanges {
  @Input('two-line') twoLine: boolean
  @Input() dense: boolean
  @ViewChild('nativeListItem') nativeListItem: ElementRef

  constructor(private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges) {
    updateModifiers(
      this.renderer,
      this.nativeListItem,
      changes,
      'mdc-list-item',
      ['avatar-list', 'two-line'],
    )
  }
}
