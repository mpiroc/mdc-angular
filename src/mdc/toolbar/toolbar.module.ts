import { NgModule } from '@angular/core'
import { ToolbarComponent } from './toolbar.component'
import { ToolbarRowComponent } from './toolbar-row.component'
import { ToolbarSectionComponent } from './toolbar-section.component'
import { ToolbarTitleDirective } from './toolbar-title.directive'
import { ButtonModule } from '../button/button.module'

const EXPORTS = [
  ToolbarComponent,
  ToolbarRowComponent,
  ToolbarSectionComponent,
  ToolbarTitleDirective,
]

@NgModule({
  imports: [ ButtonModule ],
  exports: EXPORTS,
  declarations: EXPORTS,
})
export class ToolbarModule {
}
