import {NgModule} from '@angular/core';
import {StoreModule,combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {localStorageSync} from 'ngrx-store-localstorage';
import 'rxjs/add/operator/let';
import {environment} from '../environments/environment';
import {JNAJAppState,JNAJReducers,JNAJActions} from './store';
import {SERVICES} from './services';
import {EFFECTS} from './effects';
const optionalImports = [];
const productionReducer = compose(localStorageSync(Object.keys(JNAJReducers)),combineReducers)(JNAJReducers);
export function appReducer(state:any,action:any){return productionReducer(state,action);}
if(!environment.production){optionalImports.push(StoreDevtoolsModule.instrumentOnlyWithExtension());}

@NgModule({
  imports:[
    StoreModule.provideStore(appReducer),
    ...optionalImports,
    ...EFFECTS],
  declarations:[],
  exports:[],
  providers:[
  	...JNAJActions,
  	...SERVICES]
})

export class AppStore {};
export {JNAJAppState} from './store';
