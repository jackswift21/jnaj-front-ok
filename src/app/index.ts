import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core';
import {CoreLayoutModule} from './core-layout';
import {SharedModule} from './shared';
import {App} from './app';
import {ROUTING} from './app.routing';
import 'hammerjs';

@NgModule({
  declarations: [App],
  imports: [
  	BrowserModule,
  	BrowserAnimationsModule,
  	CoreModule,
    CoreLayoutModule,
    SharedModule,
  	ROUTING],
  providers: [],
  bootstrap: [App],
})

export class AppModule { }
