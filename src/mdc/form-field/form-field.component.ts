import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core'
import { updateModifiers } from '../utils/modifiers'

@Component({
  selector: 'mdc-form-field',
  styleUrls: [ './form-field.component.scss'],
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {
  @Input() alignEnd: boolean = false

  constructor(private renderer: Renderer2, private root: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    updateModifiers(
      this.renderer,
      this.root,
      changes,
      'mdc-form-field',
      { 'alignEnd': 'align-end' },
    )
  }
}
