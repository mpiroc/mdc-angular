import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core'

@Component({
  selector: 'nav[mdc-drawer]',
  template: '<ng-content></ng-content>',
  styleUrls: [ './drawer.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerComponent {
  constructor(private renderer: Renderer2, private root: ElementRef) {
    renderer.addClass(root.nativeElement, "mdc-permanent-drawer")
    renderer.addClass(root.nativeElement, "mdc-elevation--z6")
  }
}
