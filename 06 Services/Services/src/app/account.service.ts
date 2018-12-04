import { LogginService } from "./loggin.service";
import { Injectable,EventEmitter } from "@angular/core";

@Injectable()
export class AccountService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusUpdated= new EventEmitter<string>();
    constructor(private logginService:LogginService){

    }
    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.logginService.logStateChange(status);
    }

    updateAccount(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.logginService.logStateChange(newStatus);
    }
}