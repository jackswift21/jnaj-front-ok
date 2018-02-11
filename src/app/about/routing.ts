import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {About} from './about';
import {SpecialThanks} from './thanks';
import {AboutJack} from './jack';
//import {ArticlePage,SpotlightPage,CommentDiv,MarkdownPipe} from './components';
//import {ArticleResolver,SpotlightResolver} from './providers';

export const COMPONENTS = [About,SpecialThanks,AboutJack];//ArticlePage,SpotlightPage,CommentDiv];
export const DIRECTIVES = [];
export const PIPES = [];//MarkdownPipe];

const routes:Routes = [
	{path:'',component:About},
	{path:'thanks',component:SpecialThanks},
	{path:'jack',component:AboutJack}];
	//{path:'',component:SpotlightPage,resolve:{spotlight:SpotlightResolver}},
	//{path:':slug',component:ArticlePage,resolve:{article:ArticleResolver}}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);