import { Component } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AuthGuard';
  showMenu: boolean = false;

  constructor(private authService: AuthServiceService){
    this.authService.showMenuEvent.subscribe(data =>{
      if(data == "true"){
        this.showMenu = true;
      }else{
        this.showMenu = false;
      }
    })
    if(sessionStorage.getItem('token') != null){
      this.showMenu = true;
    }
  }

}
