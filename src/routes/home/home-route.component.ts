import {
  Component,
  ViewEncapsulation,
} from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { ButtonColor } from '../../mdc/button/button.component'

@Component({
  selector: 'mdc-test-home',
  templateUrl: './home-route.component.html',
  styleUrls: [ './home-route.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class HomeRoute {
  isDisabledChecked: boolean = false
  isDenseChecked: boolean = false
  isRaisedChecked: boolean = false
  isCompactChecked: boolean = false
  isColorChecked: boolean = false

  private readonly _buttonDisabled = new Subject<boolean>()
  private readonly _buttonDense = new Subject<boolean>()
  private readonly _buttonRaised = new Subject<boolean>()
  private readonly _buttonCompact = new Subject<boolean>()
  private readonly _buttonColor = new Subject<ButtonColor>()

  get buttonDisabled$(): Observable<boolean> {
    return this._buttonDisabled
  }

  get buttonDense$(): Observable<boolean> {
    return this._buttonDense
  }

  get buttonRaised$(): Observable<boolean> {
    return this._buttonRaised
  }

  get buttonCompact$(): Observable<boolean> {
    return this._buttonCompact
  }

  get buttonColor$(): Observable<ButtonColor> {
    return this._buttonColor
  }

  onDisabledChange() {
    this._buttonDisabled.next(this.isDisabledChecked)
  }

  onDenseChange() {
    this._buttonDense.next(this.isDenseChecked)
  }

  onRaisedChange() {
    this._buttonRaised.next(this.isRaisedChecked)
  }

  onCompactChange() {
    this._buttonCompact.next(this.isCompactChecked)
  }

  onColorChange() {
    this._buttonColor.next(this.isColorChecked ? 'accent' : 'primary')
  }

  onClick($event) {
    console.log("in HomeRoute.onClick")
  }
}
