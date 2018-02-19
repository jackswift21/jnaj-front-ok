import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {About} from './about';
import {SpecialThanks} from './thanks';
import {AboutJack} from './jack';
import {AppFeaturesList} from './features';

export const COMPONENTS = [About,SpecialThanks,AboutJack,AppFeaturesList];
export const DIRECTIVES = [];
export const PIPES = [];

const routes:Routes = [
	{path:'',component:About},
	{path:'thanks',component:SpecialThanks},
	{path:'jack',component:AboutJack},
	{path:'features',component:AppFeaturesList}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);