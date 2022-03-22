import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //@ts-ignore
  constructor(@Inject(DOCUMENT) private document: Document) {}
  title = 'async-angular';
  ngOnInit() {
    fromEvent(this.document, 'mousedown').pipe(tap(console.log)).subscribe();
  }
}
