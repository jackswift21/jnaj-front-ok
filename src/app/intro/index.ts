import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';
import {ROUTING,COMPONENTS,DIRECTIVES,PIPES} from './routing';
//import {PROVIDERS} from './providers';

@NgModule({
  imports: [SharedModule,ROUTING],
  declarations: [...COMPONENTS,...DIRECTIVES,...PIPES],
  //providers: [...PROVIDERS],
})

export class IntroModule {}
