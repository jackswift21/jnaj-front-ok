import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared';
import {CoreLayoutModule} from './core';
import {App} from './app';
import {ROUTING} from './app.routing';
import {AppState} from './app.state';
import {UrlSerializer} from '@angular/router';
import {CustomUrlSerializer} from './customUrlSerializer';
import 'hammerjs';

@NgModule({
  declarations: [App],
  imports: [
  	BrowserModule,
  	BrowserAnimationsModule,
  	SharedModule,
  	CoreLayoutModule,
  	ROUTING],
  providers: [
  	AppState,
  	{provide:UrlSerializer,useClass:CustomUrlSerializer}],
  bootstrap: [App],
})

export class AppModule { }
export * from './app.state';
