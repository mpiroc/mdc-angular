import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { CheckboxComponent } from './checkbox.component'
import { CheckboxLabelDirective } from './checkbox-label.directive'

const CHECKBOX_COMPONENTS = [
  CheckboxComponent,
  CheckboxLabelDirective,
]

@NgModule({
  imports: [ FormsModule ],
  exports: [ CHECKBOX_COMPONENTS ],
  declarations: [ CHECKBOX_COMPONENTS ],
})
export class CheckboxModule {
}