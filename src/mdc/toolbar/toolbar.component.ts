import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core'
import {
  NG_VALUE_ACCESSOR,
} from '@angular/forms'
import { MDCToolbarFoundation } from '@material/toolbar'
import { Unlisteners } from '../utils/unlisteners'


type WindowUnlistenerMap = Map<Function, (this: Window, ev: UIEvent) => any>

@Component({
  selector: 'mdc-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: [ './toolbar.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToolbarComponent),
      multi: true,
    }
  ],
})
export class ToolbarComponent implements AfterViewInit, OnDestroy {
  @Input() title: string
  @ViewChild('nativeToolbar') nativeToolbar: ElementRef

  private readonly unlisteners: Unlisteners

  private mdcAdapter: MDCToolbarAdapter = {
    hasClass: (className: string) => {
      return this.nativeToolbar.nativeElement.classList.contains(className)
    },
    addClass: (className: string) => {
      this.renderer.addClass(this.nativeToolbar.nativeElement, className)
    },
    removeClass: (className: string) => {
      this.renderer.removeClass(this.nativeToolbar.nativeElement, className)
    },
    registerScrollHandler: (handler: Function) => {
      this.unlisteners.listen('window', 'scroll', handler)
    },
    deregisterScrollHandler: (handler: Function) => {
      this.unlisteners.unlisten('scroll', handler)
    },
    registerResizeHandler: (handler: Function) => {
      this.unlisteners.listen('window', 'resize', handler)
    },
    deregisterResizeHandler: (handler: Function) => {
      this.unlisteners.unlisten('resize', handler)
    },
    getViewportWidth: () => {
      return window.innerWidth
    },
    getViewportScrollY: () => {
      return window.pageYOffset
    },
    getOffsetHeight: () => {
      return this.root.nativeElement.offsetHeight
    },
    getFirstRowElementOffsetHeight: () => {
      return this.root.nativeElement.querySelector(MDCToolbarFoundation.strings.FIRST_ROW_SELECTOR).offsetHeight
    },
    notifyChange: (evtData: {flexibleExpansionRatio: number}) => {
    },
    setStyle: (property: string, value: number) => {
      this.renderer.setStyle(this.nativeToolbar.nativeElement, property, value)
    },
    setStyleForTitleElement: (property: string, value: number) => {
      this.renderer.setStyle(
         this.root.nativeElement.querySelector(MDCToolbarFoundation.strings.TITLE_SELECTOR),
        property,
        value,
      )
    },
    setStyleForFlexibleRowElement: (property: string, value: number) => {
      this.renderer.setStyle(
        this.root.nativeElement.querySelector(MDCToolbarFoundation.strings.FIRST_ROW_SELECTOR),
        property,
        value,
      )
    },
    setStyleForFixedAdjustElement: (property: string, value: number) => {
      // TODO
    }
  }

  private readonly foundation: {
    init: Function,
    destroy: Function,
  } = new MDCToolbarFoundation(this.mdcAdapter)

  constructor(private renderer: Renderer2, private root: ElementRef) {
    this.unlisteners = new Unlisteners(renderer)
  }

  ngAfterViewInit() {
    this.foundation.init()
  }

  ngOnDestroy() {
    this.foundation.destroy()
  }
}