import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers: boolean = false;
  serverCreationStatus: string = 'No Server was created';
  serverCreated:boolean=false;
  serverName: string = '';
  servers=['Test Server 1','Test Server 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Server Name: ' + this.serverName;
    this.serverCreated=true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;    
  }

}
