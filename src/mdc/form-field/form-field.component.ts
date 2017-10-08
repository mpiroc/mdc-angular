import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core'

//const MDC_FORM_FIELD_STYLES = require('@material/form-field/mdc-form-field.scss')

@Component({
  selector: 'mdc-form-field',
  styleUrls: [ './form-field.component.scss'],
  //styleUrls: [ '~@material/form-field/mdc-form-field.scss' ],
  //styles: [String(MDC_FORM_FIELD_STYLES)],
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
})
export class FormFieldComponent {
  @Input() alignEnd: boolean = false
  @HostBinding('class') get className() {
    return `mdc-form-field${this.alignEnd ? ' mdc-form-field--align-end' : ''}`
  }
}