export interface MDCDrawerAdapter {
  addClass: (className: string) => void // Adds a class to the root element.
  removeClass: (className: string) => void // Removes a class from the root element.
  hasClass: (className: string) => boolean // Returns boolean indicating whether element has a given class.
  hasNecessaryDom: () => boolean // Returns boolean indicating whether the necessary DOM is present (namely, the mdc-persistent-drawer__drawer drawer container).
  registerInteractionHandler: (evt: string, handler: EventListener) => void // Adds an event listener to the root element, for the specified event name.
  deregisterInteractionHandler: (evt: string, handler: EventListener) => void // Removes an event listener from the root element, for the specified event name.
  registerDrawerInteractionHandler: (evt: string, handler: EventListener) => void // Adds an event listener to the drawer container sub-element, for the specified event name.
  deregisterDrawerInteractionHandler: (evt: string, handler: EventListener) => void // Removes an event listener from drawer container sub-element, for the specified event name.
  registerTransitionEndHandler: (handler: EventListener) => void // Registers an event handler to be called when a transitionend event is triggered on the drawer container sub-element element.
  deregisterTransitionEndHandler: (handler: EventListener) => void // Deregisters an event handler from a transitionend event listener. This will only be called with handlers that have previously been passed to registerTransitionEndHandler calls.
  registerDocumentKeydownHandler: (handler: EventListener) => void // Registers an event handler on the document object for a keydown event.
  deregisterDocumentKeydownHandler: (handler: EventListener) => void // Deregisters an event handler on the document object for a keydown event.
  getDrawerWidth: () => number // Returns the current drawer width, in pixels.
  setTranslateX: (value: number) => void // Sets the current position for the drawer, in pixels from the border.
  getFocusableElements: () => NodeList // Returns the node list of focusable elements inside the drawer.
  saveElementTabState: (el: Element) => void // Saves the current tab index for the element in a data property.
  restoreElementTabState: (el: Element) => void // Restores the saved tab index (if any) for an element.
  makeElementUntabbable: (el: Element) => void // Makes an element untabbable.
  notifyOpen: () => void // Dispatches an event notifying listeners that the drawer has been opened.
  notifyClose: () => void // Dispatches an event notifying listeners that the drawer has been closed.
  isRtl: () => boolean // Returns boolean indicating whether the current environment is RTL.
  isDrawer: (el: Element) => boolean // Returns boolean indicating whether the provided element is the drawer container sub-element.
}
