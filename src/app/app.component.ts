import { Component } from '@angular/core';
import { PlatformLocation } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Spend Control';
  constructor(
    location: PlatformLocation,
  ) {

    location.onPopState(() => {
      history.go(0);
    });
  }

  ngOnInit() {
  }
}
