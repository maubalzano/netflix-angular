import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { AddProfileComponent } from './components/add-profile/add-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { UsersContainerComponent } from './pages/users-container/users-container.component';
import { UsersComponent } from './components/users-list/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddProfileComponent,
    EditProfileComponent,
    UsersContainerComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
