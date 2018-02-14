import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {Profiles} from './profiles';
import {ProfileForm} from './profile-form';
//import {ArticlePage,SpotlightPage,CommentDiv,MarkdownPipe} from './components';
//import {ArticleResolver,SpotlightResolver} from './providers';

export const COMPONENTS = [Profiles,ProfileForm];//ArticlePage,SpotlightPage,CommentDiv];
export const DIRECTIVES = [];
export const PIPES = [];//MarkdownPipe];

const routes:Routes = [
	{path:'',component:Profiles},
	//{path:':id',component:Profile},
	{path:':id/update',component:ProfileForm,data:{isNew:false}},
	{path:':id/settings',component:ProfileForm,data:{isNew:false}},
	{path:':id/hire',loadChildren:'../hire#HireModule'},
	{path:'new',component:ProfileForm,data:{isNew:true}},
	];
	//{path:'',component:SpotlightPage,resolve:{spotlight:SpotlightResolver}},
	//{path:':slug',component:ArticlePage,resolve:{article:ArticleResolver}}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);