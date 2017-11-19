import { NgModule } from '@angular/core'
import { DrawerComponent } from './drawer.component'
import { DrawerSelectedDirective } from './drawer-selected.directive'
import { DrawerNgRouterActiveDirective } from './drawer-ng-router-active.directive'
import { ListModule } from '../list/list.module'

const definitions = [
  DrawerComponent,
  DrawerSelectedDirective,
  DrawerNgRouterActiveDirective,
]

@NgModule({
  imports: [ ListModule ],
  exports: definitions,
  declarations: definitions,
})
export class DrawerModule {
}
