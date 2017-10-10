import { NgModule } from '@angular/core'
import { RippleModule } from '../ripple/ripple.module'
import { ButtonComponent } from './button.component'

@NgModule({
  imports: [ RippleModule ],
  exports: [ ButtonComponent ],
  declarations: [ ButtonComponent ],
})
export class ButtonModule {
}
