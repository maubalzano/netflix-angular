import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { HomeComponent } from './home/home/home.component';
import { InvalidUrlPageComponent } from './invalid-url-page/invalid-url-page.component';
import { LoginComponent } from './login/login/login.component'
import { UsersContainerComponent } from './users/users-container/users-container.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: AppContainerComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersContainerComponent},
    { path: '**', component: InvalidUrlPageComponent }
  ]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
