import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {AuthForm} from './auth-form';
import {NoAuthGuard} from './providers';
//import {ArticlePage,SpotlightPage,CommentDiv,MarkdownPipe} from './components';

export const COMPONENTS = [AuthForm];//ArticlePage,SpotlightPage,CommentDiv];
export const DIRECTIVES = [];
export const PIPES = [];//MarkdownPipe];

const routes:Routes = [
	{path:':authType',component:AuthForm,canActivate:[NoAuthGuard]}];
	//{path:'',component:SpotlightPage,resolve:{spotlight:SpotlightResolver}},
	//{path:':slug',component:ArticlePage,resolve:{article:ArticleResolver}}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);