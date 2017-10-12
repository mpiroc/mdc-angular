import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core'

@Component({
  selector: 'mdc-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: [ './drawer.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerComponent {
}
