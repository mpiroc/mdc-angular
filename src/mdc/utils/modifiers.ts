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
  modifiers: string[],
): void {
  for (let modifier of modifiers) {
    const change = changes[modifier]
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
