import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Effect,Actions} from '@ngrx/effects';
import * as NavigationActions from './navigation.actions';
import {AppNavigationService} from '../../services/navigation.service';

@Injectable()
export class NavigationEffects {
  constructor(
    private actions$:Actions,
    private router:Router,
    private location:Location,
    private navigation:AppNavigationService){}
  @Effect({dispatch:false}) navigate$ = this.actions$
    .ofType(NavigationActions.GO)
    .map((action:NavigationActions.go) => action.payload)
    .do(({path,query:queryParams,extras}) => 
      this.router.navigate(path,{queryParams,...extras}));
  @Effect({dispatch:false}) navigateBack$ = this.actions$
    .ofType(NavigationActions.BACK)
    .do(() => this.location.back());
  @Effect({dispatch:false}) navigateForward$ = this.actions$
    .ofType(NavigationActions.FORWARD)
    .do(() => this.location.forward());
}