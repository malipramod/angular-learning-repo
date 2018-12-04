import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
  activeUsers = [];
  inactiveUsers = [];
  activeCount=0;
  inactiveCount=0;

  constructor(private userService:UserService){}
  ngOnInit(){
    this.activeCount=this.userService.activeCount;
    this.inactiveCount=this.userService.inactiveCount;

    this.activeUsers=this.userService.activeUsers;
    this.inactiveUsers=this.userService.inactiveUsers;
  }
}
