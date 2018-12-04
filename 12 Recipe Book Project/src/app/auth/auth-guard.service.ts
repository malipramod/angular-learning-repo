import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';
import { take, map } from 'rxjs/operators';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromApp.AppState>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth')
      .pipe(take(1),
        map((authState: fromAuth.State) => {
          return authState.authenticated;
        }
        ));
  }
}
