import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  OnDestroy,
  Renderer2,
  SimpleChange,
  SimpleChanges,
} from '@angular/core'
import {
  Router,
  Event,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'

/*
  Angular Router-aware component that styles the element as selected
  if its routerLink matches the current router url.
*/
@Directive({
  selector: '[mdc-drawer-ng-router-active]'
})
export class DrawerNgRouterActiveDirective implements OnInit, OnChanges, OnDestroy {
  @Input() routerLink: string
  private readonly currentUrl: Observable<string>
  private currentUrlSubscription: Subscription

  constructor(
    private renderer: Renderer2,
    private root: ElementRef,
    private router: Router,
  ) {
    this.currentUrl = router.events
      .filter(event =>
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      )
      .map(event => {
        if (event instanceof NavigationEnd) {
          return (event as NavigationEnd).urlAfterRedirects
        }

        if (event instanceof NavigationCancel) {
          return (event as NavigationCancel).url
        }

        if (event instanceof NavigationError) {
          return (event as NavigationError).url
        }

        throw new Error(`Unexpected router event: ${event}`)
      })
  }

  ngOnInit() {
    this.currentUrlSubscription = this.currentUrl.subscribe(
      url => this.updateSelected(url, this.routerLink)
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    const change: SimpleChange = changes['routerLink']
    if (change) {
      this.updateSelected(this.router.url, change.currentValue)
    }
  }

  ngOnDestroy() {
    this.currentUrlSubscription.unsubscribe()
  }

  updateSelected(url: string, routerLink: string) {
    if (url === routerLink) {
      this.renderer.addClass(this.root.nativeElement, 'mdc-permanent-drawer--selected')
    }
    else {
      this.renderer.removeClass(this.root.nativeElement, 'mdc-permanent-drawer--selected')
    }
  }
}
