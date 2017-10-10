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
  @Input() compact: boolean = false
  @Input() color: ButtonColor = "primary"
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

    const denseChange = changes['dense']
    if (denseChange) {
      if (denseChange.previousValue) {
        this.removeClass('mdc-button--dense')
      }
      if (denseChange.currentValue) {
        this.addClass('mdc-button--dense')
      }
    }

    const raisedChange = changes['raised']
    if (raisedChange) {
      if (raisedChange.previousValue) {
        this.removeClass('mdc-button--raised')
      }
      if (raisedChange.currentValue) {
        this.addClass('mdc-button--raised')
      }
    }

    const compactChange = changes['compact']
    if (compactChange) {
      if (compactChange.previousValue) {
        this.removeClass('mdc-button--compact')
      }
      if (compactChange.currentValue) {
        this.addClass('mdc-button--compact')
      }
    }

    const colorChange = changes['color']
    if (colorChange) {
      if (colorChange.previousValue) {
        this.removeClass(`mdc-button--${colorChange.previousValue}`)
      }
      if (colorChange.currentValue) {
        this.addClass(`mdc-button--${colorChange.currentValue}`)
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
