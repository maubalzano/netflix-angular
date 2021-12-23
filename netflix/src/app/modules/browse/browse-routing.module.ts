import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowseHomeComponent } from './pages/browse-home/browse-home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: BrowseHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
