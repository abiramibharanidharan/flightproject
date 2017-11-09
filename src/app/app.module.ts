import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http'
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlightComponent } from './flight.component';
import { SearchFlightComponent } from './search-flight.component';
import {AddFlightComponent} from './addflight.component'
import {FlightDetailComponent} from './flight-detail/flight-detail.component'
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { FlightService } from './flight.service';
import { CallbackComponent } from './callback/callback.component';
import {MessageService} from './message.service'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlightComponent,
    SearchFlightComponent,
    AddFlightComponent,
    FlightDetailComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService,FlightService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
