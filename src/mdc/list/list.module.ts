import { NgModule } from '@angular/core'
import { ListComponent } from './list.component'
import { ListItemComponent } from './list-item.component'

const EXPORTS = [
  ListComponent,
  ListItemComponent,
]

@NgModule({
  exports: EXPORTS,
  declarations: EXPORTS,
})
export class ListModule {
}
