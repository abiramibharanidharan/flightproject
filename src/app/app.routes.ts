import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';

import {FlightComponent} from './flight.component'
import {AddFlightComponent} from './addflight.component'
import {SearchFlightComponent} from './search-flight.component'
import {FlightDetailComponent} from './flight-detail/flight-detail.component'

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {path:'add-flight',component:AddFlightComponent},
   { path: 'flight', component: FlightComponent },
    { path: 'detail/:FlightFrom', component: FlightDetailComponent },
    { path: 'search-flight', component: SearchFlightComponent },
  { path: 'callback', component: CallbackComponent },
 
  { path: '', redirectTo: '/'  ,pathMatch:'full'}
];
