import {
  Component,
  ViewEncapsulation,
} from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

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
  isUnelevatedChecked: boolean = false
  isCompactChecked: boolean = false
  isPrimaryChecked: boolean = false
  isAccentChecked: boolean = false

  private readonly _buttonDisabled = new Subject<boolean>()
  private readonly _buttonDense = new Subject<boolean>()
  private readonly _buttonRaised = new Subject<boolean>()
  private readonly _buttonUnelevated = new Subject<boolean>()
  private readonly _buttonCompact = new Subject<boolean>()
  private readonly _buttonPrimary = new Subject<boolean>()
  private readonly _buttonAccent = new Subject<boolean>()

  get buttonDisabled$(): Observable<boolean> {
    return this._buttonDisabled
  }

  get buttonDense$(): Observable<boolean> {
    return this._buttonDense
  }

  get buttonRaised$(): Observable<boolean> {
    return this._buttonRaised
  }

  get buttonUnelevated$(): Observable<boolean> {
    return this._buttonUnelevated
  }

  get buttonCompact$(): Observable<boolean> {
    return this._buttonCompact
  }

  get buttonPrimary$(): Observable<boolean> {
    return this._buttonPrimary
  }

  get buttonAccent$(): Observable<boolean> {
    return this._buttonAccent
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

  onUnelevatedChange() {
    this._buttonUnelevated.next(this.isUnelevatedChecked)
  }

  onCompactChange() {
    this._buttonCompact.next(this.isCompactChecked)
  }

  onPrimaryChange() {
    this._buttonPrimary.next(this.isPrimaryChecked)
  }

  onAccentChange() {
    this._buttonAccent.next(this.isAccentChecked)
  }

  onClick($event) {
    console.log("in HomeRoute.onClick")
  }
}
