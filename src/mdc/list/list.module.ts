import { NgModule } from '@angular/core'
import { ListComponent } from './list.component'

const EXPORTS = [
  ListComponent,
]

@NgModule({
  exports: EXPORTS,
  declarations: EXPORTS,
})
export class ListModule {
}
