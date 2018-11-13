import { Component } from '@angular/core';
// import { resolve } from 'path';
import { reject,resolve } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterStatus="";
  appStatus=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('stable');
    },2000)
  });
  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(12, 11, 2018)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(12, 11, 2018)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(12, 11, 2018)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(12, 11, 2018)
    }
  ];
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer(){
    this.servers.push({
      instanceType:'small',
      name:'New Server',
      status:'stable',
      started:new Date(12, 11, 2018)
    });
  }
}
