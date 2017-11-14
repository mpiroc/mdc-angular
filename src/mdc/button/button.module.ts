import { NgModule } from '@angular/core'
import { RippleModule } from '../ripple/ripple.module'
import { ButtonComponent } from './button.component'
import { ButtonAccentDirective } from './button-accent.directive'
import { ButtonCompactDirective } from './button-compact.directive'
import { ButtonDenseDirective } from './button-dense.directive'
import { ButtonPrimaryDirective } from './button-primary.directive'
import { ButtonRaisedDirective } from './button-raised.directive'
import { ButtonUnelevatedDirective } from './button-unelevated.directive'

const DEFINITIONS = [
  ButtonComponent,
  ButtonAccentDirective,
  ButtonCompactDirective,
  ButtonDenseDirective,
  ButtonPrimaryDirective,
  ButtonRaisedDirective,
  ButtonUnelevatedDirective,
]

@NgModule({
  imports: [ RippleModule ],
  exports: DEFINITIONS,
  declarations: DEFINITIONS,
})
export class ButtonModule {
}
