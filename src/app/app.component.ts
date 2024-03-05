import { Component, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import SwaggerUI from 'swagger-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'API-swagger-ui';

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {
    console.log("App Constructor");
  }

  ngAfterViewInit() {
    // Check if the code is running in the browser
    if (isPlatformBrowser(this.platformId)) {
      SwaggerUI({
        dom_id: '#swagger-ui',
        url: './assets/api.json'
      });
    }
  }
}
