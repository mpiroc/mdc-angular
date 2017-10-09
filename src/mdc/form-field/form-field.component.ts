import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core'

@Component({
  selector: 'mdc-form-field',
  styleUrls: [ './form-field.component.scss'],
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
})
export class FormFieldComponent {
  @Input() alignEnd: boolean = false
  @HostBinding('class') get className() {
    return `mdc-form-field${this.alignEnd ? ' mdc-form-field--align-end' : ''}`
  }
}