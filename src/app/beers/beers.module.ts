import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BeersRoutingModule } from './beers-routing.module';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerEditComponent } from './beer-edit/beer-edit.component';
@NgModule({
  declarations: [BeerListComponent, BeerEditComponent],
  imports: [
    CommonModule,
    BeersRoutingModule,
    FormsModule
  ]
})
export class BeersModule { }
