import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import { updateModifiers } from '../utils/modifiers'

@Component({
  selector: 'button[mdc-button]',
  template: '<ng-content></ng-content>',
  styleUrls: [ './button.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnChanges {
  @Input() disabled: boolean = false
  @Output('onclick') click = new EventEmitter<MouseEvent>()

  constructor(private renderer: Renderer2, private root: ElementRef) {
    renderer.addClass(root.nativeElement, 'mdc-button')
  }

  ngOnChanges(changes: SimpleChanges) {
    const disabledChange = changes['disabled']
    if (disabledChange) {
      if (disabledChange.previousValue) {
        this.renderer.removeAttribute(this.root.nativeElement, "disabled")
      }
      if (disabledChange.currentValue) {
        this.renderer.setAttribute(this.root.nativeElement, "disabled", undefined)
      }
    }
  }

  onClick($event: MouseEvent) {
    this.click.emit($event)
  }
}
