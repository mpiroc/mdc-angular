interface MDCRippleAdapter {
  browserSupportsCssVars: () => boolean
  isUnbounded: () => boolean
  isSurfaceActive: () => boolean
  isSurfaceDisabled: () => boolean
  addClass: (className: string) => void
  removeClass: (className: string) => void
  registerInteractionHandler: (evtType: string, handler: EventListener) => void
  deregisterInteractionHandler: (evtType: string, handler: EventListener) => void
  registerResizeHandler: (handler: Function) => void
  deregisterResizeHandler: (handler: Function) => void
  updateCssVariable: (varName: string, value: (string | null)) => void
  computeBoundingRect: () => ClientRect
  getWindowPageOffset: () => {x: number, y: number}
}