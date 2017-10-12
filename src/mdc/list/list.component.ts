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
  selector: 'mdc-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() avatarList: boolean
  @ViewChild('nativeList') nativeList: ElementRef

  constructor(private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges) {
    updateModifiers(
      this.renderer,
      this.nativeList,
      changes,
      'mdc-list',
      { 'avatarList': 'avatar-list' },
    )
  }
}
