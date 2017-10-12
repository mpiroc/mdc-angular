import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import { updateModifiers } from '../utils/modifiers'

@Component({
  selector: 'ul[mdc-list]',
  template: '<ng-content></ng-content>',
  styleUrls: [ './list.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
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
