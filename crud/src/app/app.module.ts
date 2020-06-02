import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarDialogComponent,
    HomeComponent,
    EditUserComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
