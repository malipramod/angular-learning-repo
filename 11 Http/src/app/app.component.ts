import { Component, OnInit } from '@angular/core';
import { ServerService } from './servers.service';
import { Response } from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    appName=this.serverService.getAppName();
    constructor(private serverService: ServerService) { }
    servers = [
        {
            name: 'Testserver',
            capacity: 10,
            id: this.generateId()
        },
        {
            name: 'Liveserver',
            capacity: 100,
            id: this.generateId()
        }
    ];
    onAddServer(name: string) {
        this.servers.push({
            name: name,
            capacity: 50,
            id: this.generateId()
        });
    }
    ngOnInit() {
        this.serverService.getServers().subscribe(
            (servers: any[]) => {                
                this.servers=servers;
            },
            (error) => console.log(error)
        );
    }
    private generateId() {
        return Math.round(Math.random() * 10000);
    }
    onSave() {
        this.serverService.storeServers(this.servers)
            .subscribe((response) => {
                console.log(response);
            }, (error) => { console.log(error); })
    }
}
