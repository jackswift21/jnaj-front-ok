import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule,JsonpModule} from '@angular/http';
import {COMPONENTS,DIRECTIVES,PIPES,ROUTING} from './routing';
//import {PROVIDERS} from './services';

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    ROUTING],
  //providers: [...PROVIDERS],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES]
})

export class SharedModule {}
//export * from './models';
//export * from './services';
export * from './animations';