import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';
import {ROUTING,COMPONENTS,DIRECTIVES,PIPES} from './routing';

@NgModule({
  imports: [SharedModule,ROUTING],
  declarations: [...COMPONENTS,...DIRECTIVES,...PIPES],
  providers: [],
})

export class SearchModule {}
