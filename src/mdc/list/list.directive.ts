import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core'
import { updateModifiers } from '../utils/modifiers'

@Directive({
  selector: '[mdc-list]',
})
export class ListDirective implements OnChanges {
  @Input() avatarList: boolean

  constructor(private renderer: Renderer2, private root: ElementRef) {
    renderer.addClass(root.nativeElement, 'mdc-list')
  }

  ngOnChanges(changes: SimpleChanges) {
    updateModifiers(
      this.renderer,
      this.root,
      changes,
      'mdc-list',
      { 'avatarList': 'avatar-list' },
    )
  }
}
