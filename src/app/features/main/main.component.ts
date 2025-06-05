import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

declare var $: any;

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: [
    '../../../../node_modules/jquery-ui/dist/themes/base/jquery-ui.min.css',
    './main.component.scss',
  ]
})
export class MainComponent implements OnInit, OnDestroy {
  private observable: Observable<boolean>;
  private subscription: Subscription | null = null;
  public popupOnView: boolean = false;

  public constructor() {
    this.observable = new Observable((observer) => {
      const timeOut = setTimeout(() => {
        observer.next(this.popupOnView = true)
      }, 10000);

      return {
        unsubscribe() {
          clearTimeout(timeOut)
        }
      }
    });
  }

  public ngOnInit(): void {
    $("#accordion").accordion({
      collapsible: true,
      heightStyle: 'content',
    });

    this.subscription = this.observable.subscribe();
  }

  public ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
