import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {Samples} from './samples';
import {SimpleSimon} from './simon';
//import {ArticlePage,SpotlightPage,CommentDiv,MarkdownPipe} from './components';
//import {ArticleResolver,SpotlightResolver} from './providers';

export const COMPONENTS = [Samples,SimpleSimon];//ArticlePage,SpotlightPage,CommentDiv];
export const DIRECTIVES = [];
export const PIPES = [];//MarkdownPipe];

const routes:Routes = [
	{path:'',component:Samples},
	{path:'simon',component:SimpleSimon},];
	//{path:'',component:SpotlightPage,resolve:{spotlight:SpotlightResolver}},
	//{path:':slug',component:ArticlePage,resolve:{article:ArticleResolver}}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);