import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core'

@Component({
  selector: 'section[mdc-card-actions]',
  template: '<ng-content></ng-content>',
  styleUrls: [ './card.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardActionsComponent {
  constructor(renderer: Renderer2, root: ElementRef) {
    renderer.addClass(root.nativeElement, 'mdc-card__actions')
  }
}
