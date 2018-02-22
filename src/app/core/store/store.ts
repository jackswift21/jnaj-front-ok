import { Observable } from 'rxjs/Observable';
import { NgModule } from '@angular/core';
import { StoreModule, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import 'rxjs/add/operator/let';
import { environment } from '../environments/environment';
import { FooState,FooReducers,FooActions } from './';
export { FooState } from './';
const actions = FooActions;
const reducers = FooReducers;
const optionalImports = [];
const productionReducer = compose(localStorageSync(Object.keys(reducers)),combineReducers)(reducers);
export function appReducer(state: any, action: any){return productionReducer(state, action);}
//console.log(action.type);
if (!environment.production){optionalImports.push(StoreDevtoolsModule.instrumentOnlyWithExtension());}

@NgModule({
  imports: [
    StoreModule.provideStore(appReducer),
    ...optionalImports],
  declarations: [],
  exports: [],
  providers: [ ...actions ]
})
export class AppStore {};
