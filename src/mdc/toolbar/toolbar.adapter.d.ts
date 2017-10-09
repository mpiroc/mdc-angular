interface MDCToolbarAdapter {
  hasClass: (className: string) => boolean
  addClass: (className: string) => void
  removeClass: (className: string) => void
  registerScrollHandler: (handler: Function) => void
  deregisterScrollHandler: (handler: Function) => void
  registerResizeHandler: (handler: Function) => void
  deregisterResizeHandler: (handler: Function) => void
  getViewportWidth: () => number
  getViewportScrollY: () => number
  getOffsetHeight: () => number
  getFirstRowElementOffsetHeight: () => number
  notifyChange: (evtData: {flexibleExpansionRatio: number}) => void
  setStyle: (property: string, value: number) => void
  setStyleForTitleElement: (property: string, value: number) => void
  setStyleForFlexibleRowElement: (property: string, value: number) => void
  setStyleForFixedAdjustElement: (property: string, value: number) => void
}
