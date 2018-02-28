import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {reducers,metaReducers,EFFECTS} from './store';
import {SERVICES} from './services';

@NgModule({
  imports:[
    StoreModule.forRoot(reducers,{metaReducers}),
    StoreDevtoolsModule.instrument({maxAge:10}),
    EffectsModule.forRoot(EFFECTS)],
  providers: [...SERVICES],
})

export class CoreModule { }
export * from './services';