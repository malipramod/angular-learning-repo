import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipe.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  authState:Observable<fromAuth.State>;
  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(){
    this.authState =this.store.select('auth');
  }

  onSaveData() {
   this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout() {    
    this.store.dispatch(new AuthActions.Logout());
  }
}
