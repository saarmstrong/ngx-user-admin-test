import { Component, OnInit } from '@angular/core';

// Import the component we will extend
import { UserEditComponent }   from '@erdiko/ngx-user-admin';

@Component({
  selector: 'app-myusereditcomponent',
  templateUrl: './myusereditcomponent.component.html'
})
export class MyusereditcomponentComponent extends UserEditComponent {

    constructor(
            @Inject(UsersService) usersService: UsersService,
            @Inject(ActivatedRoute) route: ActivatedRoute,
            @Inject(Router) router: Router,
            @Inject(MessageService) messageService: MessageService) {

        super();
    }

}
