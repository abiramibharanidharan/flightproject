import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Flight} from '../flightclass'
import {FlightService} from '../flight.service'

@Component({
    selector:'flight-deail',
    templateUrl:'./flight-detail.component.html',
    styleUrls:['./flight-detail.component.css'],
    providers:[FlightService]
})

export class FlightDetailComponent implements OnInit
{
    @Input() flight:Flight

    constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getFlight();
  }

  getFlight(): void {
    const FlightFrom = this.route.snapshot.paramMap.get('FlightFrom');
    this.flightService.getFlight(FlightFrom)
      .then(flight => this.flight = flight);
  }

  goBack(): void {
    this.location.back();
  }

 

}