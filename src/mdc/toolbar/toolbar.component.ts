import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  Renderer2,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import { MDCToolbarFoundation } from '@material/toolbar'
import { Unlisteners } from '../utils/unlisteners'
import { updateModifiers } from '../utils/modifiers'

@Component({
  selector: 'header[mdc-toolbar]',
  template: '<ng-content></ng-content>',
  styleUrls: [ './toolbar.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() title: string
  @Input() fixed: boolean

  private readonly unlisteners: Unlisteners

  private mdcAdapter: MDCToolbarAdapter = {
    hasClass: (className: string) => {
      return this.root.nativeElement.classList.contains(className)
    },
    addClass: (className: string) => {
      this.renderer.addClass(this.root.nativeElement, className)
    },
    removeClass: (className: string) => {
      this.renderer.removeClass(this.root.nativeElement, className)
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
      this.renderer.setStyle(this.root.nativeElement, property, value)
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
    renderer.addClass(root.nativeElement, 'mdc-toolbar')
  }

  ngAfterViewInit() {
    this.foundation.init()
  }

  ngOnDestroy() {
    this.foundation.destroy()
  }

  ngOnChanges(changes: SimpleChanges) {
    updateModifiers(
      this.renderer,
      this.root,
      changes,
      'mdc-toolbar',
      { 'fixed': 'fixed' },
    )
  }
}
