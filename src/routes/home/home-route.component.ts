import {
  Component,
  ViewEncapsulation,
} from '@angular/core'

@Component({
  selector: 'mdc-test-home',
  templateUrl: './home-route.component.html',
  styleUrls: [ './home-route.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class HomeRoute {
  isChecked: boolean = false
  changeEventCount: number = 0

  get status(): string {
    return this.isChecked ? 'checked' : 'unchecked'
  }

  handleChange() {
    this.changeEventCount++
  }
}