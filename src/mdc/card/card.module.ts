import { NgModule } from '@angular/core'
import { CardComponent } from './card.component'
import { ButtonModule } from '../button/button.module'
import { RippleModule } from '../ripple/ripple.module'

@NgModule({
  imports: [
    ButtonModule,
    RippleModule,
  ],
  exports: [
    CardComponent,
  ],
  declarations: [
    CardComponent,
  ],
})
export class CardModule {
}
