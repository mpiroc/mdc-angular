import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  Renderer2,
  RendererStyleFlags2,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core'
import { MDCRippleFoundation } from '@material/ripple'
import { cssClasses } from '@material/ripple/constants'
import {
  getMatchesProperty,
  supportsCssVariables,
} from '@material/ripple/util'
import { Unlisteners } from '../utils/unlisteners'

@Directive({
  selector: '[mdc-ripple]',
})
export class RippleDirective implements AfterViewInit, OnChanges, OnDestroy {
  @Input() unbounded: boolean
  @Input() disabled: boolean

  private readonly unlisteners: Unlisteners
  private get element() { return this.surface.nativeElement }

  private mdcAdapter: MDCRippleAdapter = {
    browserSupportsCssVars: () => {
      return supportsCssVariables(window)
    },
    isUnbounded: () => {
      return !!this.unbounded
    },
    isSurfaceActive: () => {
      return this.element[getMatchesProperty(this.element)](':active')
    },
    isSurfaceDisabled: () => {
      return !!this.disabled
    },
    addClass: (className: string) => {
      this.renderer.addClass(this.element, className)
    },
    removeClass: (className: string) => {
      this.renderer.removeClass(this.element, className)
    },
    registerInteractionHandler: (evtType: string, handler: EventListener) => {
      const target = evtType === 'mouseup' || evtType === 'pointerup' ? 'window' : this.element
      this.unlisteners.listen(target, evtType, handler)
    },
    deregisterInteractionHandler: (evtType: string, handler: EventListener) => {
      const target = evtType === 'mouseup' || evtType === 'pointerup' ? 'window' : this.element
      this.unlisteners.unlisten(target, handler)
    },
    registerResizeHandler: (handler: Function) => {
      this.unlisteners.listen('window', 'resize', handler)
    },
    deregisterResizeHandler: (handler: Function) => {
      this.unlisteners.unlisten('resize', handler)
    },
    updateCssVariable: (varName: string, value: (string | null)) => {
      this.renderer.setStyle(this.element, varName, value, RendererStyleFlags2.DashCase)
    },
    computeBoundingRect: () => {
      return this.element.getBoundingClientRect()
    },
    getWindowPageOffset: () => {
      return {
        x: window.pageXOffset,
        y: window.pageYOffset,
      }
    },
  }

  private readonly foundation: {
    init: Function,
    destroy: Function,
    activate: Function,
  } = new MDCRippleFoundation(this.mdcAdapter)

  constructor(private renderer: Renderer2, private surface: ElementRef) {
    this.unlisteners = new Unlisteners(renderer)
  }

  ngAfterViewInit() {
    this.foundation.init()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['unbounded'] !== undefined) {
      if (this.unbounded) {
        this.mdcAdapter.addClass(cssClasses.UNBOUNDED)
      }
      else {
        this.mdcAdapter.removeClass(cssClasses.UNBOUNDED)
      }
    }
  }

  ngOnDestroy() {
    this.foundation.destroy()
  }
}