import { NgModule } from '@angular/core'
import { DrawerComponent } from './drawer.component'
import { ListModule } from '../list/list.module'

@NgModule({
  imports: [ ListModule ],
  exports: [ DrawerComponent ],
  declarations: [ DrawerComponent ],
})
export class DrawerModule {
}
