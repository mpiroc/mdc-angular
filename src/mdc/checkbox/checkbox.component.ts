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
  Renderer2,
  ViewChild,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core'
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms'
import { MDCCheckboxFoundation } from '@material/checkbox'
import { Unlisteners } from '../utils/unlisteners'

@Component({
  selector: 'mdc-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: [ './checkbox.component.scss' ],
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
  @Output() change: EventEmitter<Event> = new EventEmitter<Event>()
  @HostBinding('class') className: string = 'mdc-checkbox'
  @ViewChild('nativeCheckbox') nativeCheckbox: ElementRef

  onTouched: () => any = () => {}

  private controlValueAccessorChangeFn: (value: any) => void = (value) => {}
  private readonly unlisteners: Unlisteners

  private mdcAdapter: MDCCheckboxAdapter = {
    addClass: (className: string) => {
      this.renderer.addClass(this.root.nativeElement, className)
    },
    removeClass: (className: string) => {
      this.renderer.removeClass(this.root.nativeElement, className)
    },
    registerAnimationEndHandler: (listener: EventListener) => {
      if (this.root) {
        this.unlisteners.listen(this.root.nativeElement, 'animationend', listener)
      }
    },
    deregisterAnimationEndHandler: (listener: EventListener) => {
      this.unlisteners.unlisten('animationend', listener)
    },
    registerChangeHandler: (listener: EventListener) => {
      if (this.root) {
        this.unlisteners.listen(this.nativeCheckbox.nativeElement, 'change', listener)
      }
    },
    deregisterChangeHandler: (listener: EventListener) => {
      this.unlisteners.unlisten('change', listener)
    },
    getNativeControl: () => {
      if (!this.nativeCheckbox) {
        throw new Error('Invalid state')
      }

      return this.nativeCheckbox.nativeElement
    },
    forceLayout: () => {
      if (this.root) {
        return this.root.nativeElement.offsetWidth
      }
    },
    isAttachedToDOM: () => !!this.root
  }

  private readonly _foundation: {
    init: Function,
    destroy: Function,
  } = new MDCCheckboxFoundation(this.mdcAdapter)

  constructor(private renderer: Renderer2, private root: ElementRef) {
    this.unlisteners = new Unlisteners(renderer)
  }

  ngAfterViewInit() {
    this._foundation.init()
  }

  ngOnDestroy() {
    this._foundation.destroy()
  }

  handleChange(event: Event) {
    event.stopPropagation()
    this.controlValueAccessorChangeFn((event.target as any).checked)
    this.change.emit(event)
  }

  writeValue(value: any) {
    this.checked = !!value
  }

  registerOnChange(fn: (value: any) => void) {
    this.controlValueAccessorChangeFn = fn
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn
  }
}
