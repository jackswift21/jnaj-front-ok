import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {Profiles} from './profiles';
import {ProfileForm} from './profile-form';
import {ProfilesResolver} from './_providers';

export const COMPONENTS = [Profiles,ProfileForm];
export const DIRECTIVES = [];
export const PIPES = [];

const routes:Routes = [
	{path:'',component:Profiles},
	{path:'new',component:ProfileForm,data:{isNew:true}},
	//{path:':id',component:Profile},
	{path:':id/update',component:ProfileForm,data:{isNew:false}},
	{path:':id/settings',component:ProfileForm,data:{isNew:false}}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);