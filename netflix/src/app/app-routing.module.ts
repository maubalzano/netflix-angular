import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { InvalidUrlPageComponent } from './components/invalid-url-page/invalid-url-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: AppContainerComponent, children: [
    {
      path: 'home',
      loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'login',
      loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
      path: 'users',
      loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
    },
    {
      path: 'browse',
      loadChildren: () => import('./modules/browse/browse.module').then(m => m.BrowseModule)
    },
    { path: '**', component: InvalidUrlPageComponent }
  ]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
