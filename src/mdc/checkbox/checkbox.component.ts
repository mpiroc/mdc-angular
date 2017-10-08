import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Output,
  Renderer,
  ViewChild,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core'
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms'
import { MDCCheckboxFoundation } from '@material/checkbox'

@Component({
  selector: 'mdc-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: [ '@material/checkbox/mdc-checkbox.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    }
  ],
})
export class CheckboxComponent implements AfterViewInit, OnDestroy {
  @Input() checked: boolean = false
  @Input() indeterminate: boolean = false
  @Input() labelId: string
  @Output() change: EventEmitter<Event> = new EventEmitter<Event>()
  @HostBinding('class') className: string = 'mdc-checkbox'
  @ViewChild('nativeCheckbox') nativeCheckbox: ElementRef

  onTouched: () => any = () => {}

  private _controlValueAccessorChangeFn: (value: any) => void = (value) => {}
  private _unlisteners: Map<string, WeakMap<EventListener, Function>> =
    new Map<string, WeakMap<EventListener, Function>>()

  private _mdcAdapter: MDCCheckboxAdapter = {
    addClass: (className: string) => {
      this._renderer.setElementClass(this._root.nativeElement, className, true)
    },
    removeClass: (className: string) => {
      this._renderer.setElementClass(this._root.nativeElement, className, false)
    },
    registerAnimationEndHandler: (listener: EventListener) => {
      if (this._root) {
        this.listen(MDCCheckboxFoundation.strings.ANIM_END_EVENT_NAME, listener)
      }
    },
    deregisterAnimationEndHandler: (listener: EventListener) => {
      this.unlisten(MDCCheckboxFoundation.strings.ANIM_END_EVENT_NAME, listener)
    },
    registerChangeHandler: (listener: EventListener) => {
      if (this._root) {
        this.listen('change', listener, this.nativeCheckbox)
      }
    },
    deregisterChangeHandler: (listener: EventListener) => {
      this.unlisten('change', listener)
    },
    getNativeControl: () => {
      const { nativeCheckbox } = this
      if (!nativeCheckbox) {
        throw new Error('Invalid state')
      }

      return nativeCheckbox.nativeElement
    },
    forceLayout: () => {
      if (this._root) {
        return this._root.nativeElement.offsetWidth
      }
    },
    isAttachedToDOM: () => !!this._root
  }

  private _foundation: {
    init: Function,
    destroy: Function,
  } = new MDCCheckboxFoundation(this._mdcAdapter)

  constructor(private _renderer: Renderer, private _root: ElementRef) {}

  ngAfterViewInit() {
    this._foundation.init()
  }

  ngOnDestroy() {
    this._foundation.destroy()
  }

  handleChange(event: Event) {
    event.stopPropagation()
    this._controlValueAccessorChangeFn((event.target as any).checked)
    this.change.emit(event)
  }

  writeValue(value: any) {
    this.checked = !! value
  }

  registerOnChange(fn: (value: any) => void) {
    this._controlValueAccessorChangeFn = fn
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn
  }

  listen(type: string, listener: EventListener, ref: ElementRef = this._root) {
    if (!this._unlisteners.has(type)) {
      this._unlisteners.set(type, new WeakMap<EventListener, Function>())
    }
    const unlistener = this._renderer.listen(ref.nativeElement, type, listener)
    this._unlisteners.get(type).set(listener, unlistener)
  }

  unlisten(type: string, listener: EventListener) {
    if (!this._unlisteners.has(type)) {
      return;
    }

    const unlisteners = this._unlisteners.get(type)
    if (!unlisteners.has(listener)) {
      return;
    }
    unlisteners.get(listener)()
    unlisteners.delete(listener)
  }
}
