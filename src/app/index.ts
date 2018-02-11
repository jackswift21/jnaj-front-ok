import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared';
import {CoreLayoutModule} from './core';
import {App} from './app';
import {ROUTING} from './app.routing';
//import {UserService} from './shared';
import 'hammerjs';

@NgModule({
  declarations: [App],
  imports: [
  	BrowserModule,
  	BrowserAnimationsModule,
  	SharedModule,
  	CoreLayoutModule,
  	ROUTING],
  //providers: [UserService],
  bootstrap: [App],
})

export class AppModule { }
