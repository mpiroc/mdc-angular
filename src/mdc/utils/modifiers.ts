import {
  ElementRef,
  Renderer2,
  SimpleChanges,
} from '@angular/core'

export function updateModifiers(
  renderer: Renderer2,
  nativeElementRef: ElementRef,
  changes: SimpleChanges,
  baseClass: string,
  modifiers: { [key: string]: string },
): void {
  for (let key in modifiers) {
    const change = changes[key]
    const modifier = modifiers[key]
    if (change) {
      if (change.previousValue) {
        renderer.removeClass(nativeElementRef.nativeElement, `${baseClass}--${modifier}`)
      }
      if (change.currentValue) {
        renderer.addClass(nativeElementRef.nativeElement, `${baseClass}--${modifier}`)
      }
    }
  }
}
