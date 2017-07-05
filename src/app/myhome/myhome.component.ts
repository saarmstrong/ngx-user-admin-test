import { Component, OnInit } from '@angular/core';

// Import the component we will extend
import { HomeComponent }   from '@erdiko/ngx-user-admin';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html'
})
export class MyhomeComponent extends HomeComponent {

    constructor() { 
        super();
    }

}
