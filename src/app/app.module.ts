import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes }     from '@angular/router';

import { AlertModule,
         ModalModule,
         TabsModule }          from 'ngx-bootstrap';

import { UserAdminModule }     from '@erdiko/ngx-user-admin';

import { AppComponent } from './app.component';


// clang-format off
const routes: Routes = [];
// clang-format on

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,


    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),

    RouterModule.forRoot(routes),

    UserAdminModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
