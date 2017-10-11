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

export type ButtonColor = "primary" | "accent"

@Component({
  selector: 'mdc-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnChanges {
  @Input() disabled: boolean = false
  @Input() dense: boolean = false
  @Input() raised: boolean = false
  @Input() unelevated: boolean = false
  @Input() compact: boolean = false
  @Input() primary: boolean = false
  @Input() accent: boolean = false
  @ViewChild('nativeButton') nativeButton: ElementRef

  @Output('onclick') click = new EventEmitter<MouseEvent>()

  constructor(private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges) {
    const disabledChange = changes['disabled']
    if (disabledChange) {
      if (disabledChange.previousValue) {
        this.renderer.removeAttribute(this.nativeButton.nativeElement, "disabled")
      }
      if (disabledChange.currentValue) {
        this.renderer.setAttribute(this.nativeButton.nativeElement, "disabled", undefined)
      }
    }

    for (let modifier of ['dense', 'raised', 'unelevated', 'compact', 'primary', 'accent']) {
      const change = changes[modifier]
      if (change) {
        if (change.previousValue) {
          this.removeClass(`mdc-button--${modifier}`)
        }
        if (change.currentValue) {
          this.addClass(`mdc-button--${modifier}`)
        }
      }
    }
  }

  onClick($event: MouseEvent) {
    this.click.emit($event)
  }

  private addClass(newClass: string) {
    this.renderer.addClass(this.nativeButton.nativeElement, newClass)
  }

  private removeClass(oldClass: string) {
    this.renderer.removeClass(this.nativeButton.nativeElement, oldClass)
  }
}
