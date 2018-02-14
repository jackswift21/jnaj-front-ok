import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {Search} from './search';
import {AdvancedSearch} from './search-adv';
import {SearchResults} from './search-results';
//import {ArticlePage,SpotlightPage,CommentDiv,MarkdownPipe} from './components';
//import {ArticleResolver,SpotlightResolver} from './providers';

export const COMPONENTS = [Search,AdvancedSearch,SearchResults];//ArticlePage,SpotlightPage,CommentDiv];
export const DIRECTIVES = [];
export const PIPES = [];//MarkdownPipe];

const routes:Routes = [{path:'',component:Search}];
	//{path:'',component:SpotlightPage,resolve:{spotlight:SpotlightResolver}},
	//{path:':slug',component:ArticlePage,resolve:{article:ArticleResolver}}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);