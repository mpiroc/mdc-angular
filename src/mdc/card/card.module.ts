import { NgModule } from '@angular/core'

import { CardActionDirective } from './card-action.directive'
import { CardActionsComponent } from './card-actions.component'
import { CardComponent } from './card.component'
import { CardMediaComponent } from './card-media.component'
import { CardPrimaryComponent } from './card-primary.component'
import { CardSubtitleComponent } from './card-subtitle.component'
import { CardSupportingTextComponent } from './card-supporting-text.component'
import { CardTitleComponent } from './card-title.component'
import { CardTitleLargeDirective } from './card-title-large.directive'

const DEFINITIONS = [
  CardActionDirective,
  CardActionsComponent,
  CardComponent,
  CardMediaComponent,
  CardPrimaryComponent,
  CardSubtitleComponent,
  CardSupportingTextComponent,
  CardTitleComponent,
  CardTitleLargeDirective,
]

@NgModule({
  exports: DEFINITIONS,
  declarations: DEFINITIONS,
})
export class CardModule {
}
