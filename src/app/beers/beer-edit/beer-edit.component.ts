import { Component, OnInit } from '@angular/core';
import { BeerServiceService } from 'src/app/services/beer/beer-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer-edit',
  templateUrl: './beer-edit.component.html',
  styleUrls: ['./beer-edit.component.css']
})
export class BeerEditComponent implements OnInit {

  beerDetails = {};
  id = '';
  constructor(
    private beerServ: BeerServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.beerServ.getbreweryById(this.id)
      .subscribe((data) => {
        this.beerDetails = data;
      })

  }

}
