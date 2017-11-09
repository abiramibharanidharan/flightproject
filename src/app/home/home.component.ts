import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import {FlightService} from '../flight.service'
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Flight} from '../flightclass'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[FlightService]
})
export class HomeComponent implements OnInit {
  searchbutton:boolean
  loadFlight:boolean=false
  welcomedisplay:boolean=true
  constructor(public auth: AuthService,private flightservice:FlightService) { }

  ngOnInit()
  {
        this.flightservice.getFlights()
  }
  loadflights():void{
    this.loadFlight=true;
    this.welcomedisplay=false;
  }

}
