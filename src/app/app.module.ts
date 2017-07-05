import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes }     from '@angular/router';

import { AlertModule,
         ModalModule,
         TabsModule }           from 'ngx-bootstrap';

import { UserAdminModule }      from '@erdiko/ngx-user-admin';

import { AppComponent }         from './app.component';

// Extended components from ngx-user-admin package
import { MyhomeComponent }      from './myhome/myhome.component';
import { MyusereditComponent }  from './myuseredit/myuseredit.component';

/**
  Custom routing to make sure we use our extended components    
 */

// clang-format off
const routes: Routes = [
     {
         path: 'user',
         component: MyusereditComponent
     },
     {
         path: '',
         component: MyhomeComponent
     },
     {
         path: '**',
         redirectTo: ''
     }
];
// clang-format on

@NgModule({
  declarations: [
    AppComponent,

    // Declare our custom components
    MyhomeComponent,
    MyusereditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,


    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),

    // Import our custom routes
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
