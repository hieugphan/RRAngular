import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

//@Component is a decorator that will give meta data that indicates this specific typescript file is a component  
//Each component includes 3 file: ts, html, css
@Component({
  selector: 'app-root', //selector name is used to select the component in the index.html <app-root></app-root>
  templateUrl: './app.component.html', //give the file path to the html component
  styleUrls: ['./app.component.css'] //give the file path to the css component
})
export class AppComponent {
  title = 'RRAngular';

  /**
   *
   */
  constructor(public auth:AuthService) {    
  }
}
