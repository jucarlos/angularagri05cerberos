import { Component } from '@angular/core';
import { UserService } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appcerberos';

  constructor(private user: UserService) {}

  salir() {
    this.user.logout();
  }

  


}
