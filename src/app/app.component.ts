import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homeload:boolean=false
  statusload:boolean=false
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
  Homeload()
  {
     this.homeload=true;
  }
  Statusload()
  {
    this.statusload=true
  }

}
