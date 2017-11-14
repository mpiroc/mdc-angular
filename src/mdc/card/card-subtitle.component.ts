import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core'

@Component({
  selector: 'section[mdc-card-subtitle]',
  template: '<ng-content></ng-content>',
  styleUrls: [ './card.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardSubtitleComponent {
  constructor(private renderer: Renderer2, private root: ElementRef) {
    renderer.addClass(root.nativeElement, 'mdc-card__subtitle')
  }
}
