import { Component, OnInit } from '@angular/core';
import { BeerServiceService } from 'src/app/services/beer/beer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beerList = [];
  sortfeild: string;
  selectedPrimarySort = 'name';
  secondsort: string;

  sorts = [
    {
      name: 'BreweryName',
      value: 'name'
    },
    {
      name: 'BreweryType',
      value: 'brewery_type'
    },
    {
      name: 'City',
      value: 'city'
    },
    {
      name: 'State',
      value: 'state'
    },
    {
      name: 'Country',
      value: 'country'
    }
  ];


  constructor(private beerServ: BeerServiceService,
    private router: Router) {
    this.getBeerlist();
  }


  getbeerDetails(id) {
    this.router.navigate(['/beers', id, 'edit']);
  }

  primarySort() {

    this.getBeerlist();
  }

  secondarySort() {

    this.getBeerlist();
  }

  getBeerlist() {
    this.sortfeild = this.selectedPrimarySort;
    if (this.secondsort) {
      this.sortfeild += ',' + this.secondsort;
    }
    this.beerServ.getbeerList(this.sortfeild)
      .subscribe((data: any) => {
        console.log(data);
        this.beerList = data;
      });
  }


  ngOnInit() {

  }

}
