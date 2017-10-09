import {
  Renderer2,
  ElementRef,
} from '@angular/core'

type EventCallback = Function
type EventTarget = 'window' | 'document' | 'body' | any
type Unlistener = Function

export class Unlisteners {
  private unlisteners: Map<string, WeakMap<EventCallback, Unlistener>> =
    new Map<string, WeakMap<EventCallback, Unlistener>>()

  constructor(private renderer: Renderer2) {
  }

  listen(target: EventTarget, eventName: string, callback: EventCallback) {
    if (!this.unlisteners.has(eventName)) {
      this.unlisteners.set(eventName, new WeakMap<EventCallback, Unlistener>())
    }

    const unlistener = this.renderer.listen(target, eventName, event => callback(event))
    this.unlisteners.get(eventName).set(callback, unlistener)
  }

  unlisten(eventName: string, callback: EventCallback) {
    if (!this.unlisteners.has(eventName)) {
      return;
    }

    const unlisteners = this.unlisteners.get(eventName)
    if (!unlisteners.has(callback)) {
      return;
    }
    unlisteners.get(callback)()
    unlisteners.delete(callback)
  }
}