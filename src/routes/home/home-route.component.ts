import { Component } from '@angular/core'

@Component({
  selector: 'mdc-test-home',
  templateUrl: './home-route.component.html',
})
export class HomeRoute {
  isChecked: boolean = false
  isIndeterminate: boolean = false
  labelId: string = 'my-checkbox-label'
  changeEventCount: number = 0

  get status(): string {
    if (this.isIndeterminate) {
      return 'indeterminate'
    }

    return this.isChecked ? 'checked' : 'unchecked'
  }

  handleChange() {
    this.isIndeterminate = false
    this.changeEventCount++
  }
}