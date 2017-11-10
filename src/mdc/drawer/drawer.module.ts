import { NgModule } from '@angular/core'
import { DrawerComponent } from './drawer.component'
import { DrawerSelectedDirective } from './drawer-selected.directive'
import { ListModule } from '../list/list.module'

@NgModule({
  imports: [ ListModule ],
  exports: [
    DrawerComponent,
    DrawerSelectedDirective,
  ],
  declarations: [
    DrawerComponent,
    DrawerSelectedDirective,
  ],
})
export class DrawerModule {
}
