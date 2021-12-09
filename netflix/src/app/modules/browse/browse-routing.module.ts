import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseContainerComponent } from './pages/browse-container/browse-container.component';

const routes: Routes = [
  {
    path: '',
    component: BrowseContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
