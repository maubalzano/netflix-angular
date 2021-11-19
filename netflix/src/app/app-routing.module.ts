import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component'

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full'},
//   { path: 'home', component: HomeComponent},
//   { path: 'login', component: LoginComponent}
// ];

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: AppContainerComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent }
  ]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
