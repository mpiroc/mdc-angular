import { NgModule } from '@angular/core'
import { ToolbarComponent } from './toolbar.component'
import { ToolbarTitleDirective } from './toolbar-title.directive'
import { ButtonModule } from '../button/button.module'

const EXPORTS = [
  ToolbarComponent,
  ToolbarTitleDirective,
]

@NgModule({
  imports: [ ButtonModule ],
  exports: EXPORTS,
  declarations: EXPORTS,
})
export class ToolbarModule {
}
