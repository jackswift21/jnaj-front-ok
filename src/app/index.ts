import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared';
import {CoreLayoutModule} from './core-layout';
import {AppStore} from './core';
import {App} from './app';
import {ROUTING} from './app.routing';
import {PROVIDERS} from './_providers';
import 'hammerjs';

@NgModule({
  declarations: [App],
  imports: [
  	BrowserModule,
  	BrowserAnimationsModule,
  	SharedModule,
  	CoreLayoutModule,
  	AppStore,
  	ROUTING],
  providers: [...PROVIDERS],
  bootstrap: [App],
})

export class AppModule { }
