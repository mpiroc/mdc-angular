import { NgModule } from '@angular/core'
import { ListDirective } from './list.directive'
import { ListItemDirective } from './list-item.directive'
import { ListItemStartDetailDirective } from './list-item-start-detail.directive'
import { ListItemEndDetailDirective } from './list-item-end-detail.directive'

const EXPORTS = [
  ListDirective,
  ListItemDirective,
  ListItemStartDetailDirective,
  ListItemEndDetailDirective,
]

@NgModule({
  exports: EXPORTS,
  declarations: EXPORTS,
})
export class ListModule {
}
