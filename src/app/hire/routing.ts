import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HireMe} from './hire';
//import {ArticlePage,SpotlightPage,CommentDiv,MarkdownPipe} from './components';
//import {ArticleResolver,SpotlightResolver} from './providers';

export const COMPONENTS = [HireMe];//ArticlePage,SpotlightPage,CommentDiv];
export const DIRECTIVES = [];
export const PIPES = [];//MarkdownPipe];

const routes:Routes = [{path:'',component:HireMe}];
	//{path:'',component:SpotlightPage,resolve:{spotlight:SpotlightResolver}},
	//{path:':slug',component:ArticlePage,resolve:{article:ArticleResolver}}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);