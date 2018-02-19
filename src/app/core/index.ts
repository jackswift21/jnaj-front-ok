import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';
import {COMPONENTS,DIRECTIVES,PIPES,ROUTING} from './routing';
import {PROVIDERS} from './_providers';

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES],
  imports: [
    SharedModule,
    ROUTING],
  providers: [...PROVIDERS],
  exports:[
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES]
})

export class CoreLayoutModule {}