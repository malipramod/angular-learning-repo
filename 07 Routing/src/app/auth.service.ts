import { Promise, resolve, reject } from "q";

export class AuthService {
    loggedIn:boolean = false;
    login() {
        this.loggedIn = true;
    }
    logout() {
        this.loggedIn = false;
    }

    isAuthenticated(): boolean {
        return this.loggedIn;
    }

}