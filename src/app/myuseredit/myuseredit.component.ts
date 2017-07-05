import { Component, NgModule, OnInit, ViewChild, AfterViewInit, Inject }   from '@angular/core';
import { Router, ActivatedRoute }               from '@angular/router';

// Import the component we will extend
import { UserEditComponent }    from '@erdiko/ngx-user-admin';
import { AuthService }          from '@erdiko/ngx-user-admin';
import { UsersService }         from '@erdiko/ngx-user-admin';
import { MessageService }       from '@erdiko/ngx-user-admin';

@Component({
  selector: 'app-myusereditcomponent',
  templateUrl: './myuseredit.component.html',
  providers: [AuthService, UsersService, MessageService]
})
export class MyusereditComponent extends UserEditComponent {

    constructor(
            @Inject(UsersService) usersService: UsersService,
            @Inject(ActivatedRoute) route: ActivatedRoute,
            @Inject(Router) router: Router,
            @Inject(MessageService) messageService: MessageService) {

        super(usersService, route, router, messageService);
    }

}
