import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerEditComponent } from './beer-edit/beer-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BeerListComponent
  },
  {
    path: ':id/edit',
    component: BeerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeersRoutingModule { }
