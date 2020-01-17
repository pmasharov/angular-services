import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-services';
  forms = [
    { name: 'first form' },
    { name: 'second form' },
    { name: 'third form' }
  ]
}
