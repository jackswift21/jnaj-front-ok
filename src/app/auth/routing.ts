import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {Auth} from './auth';
import {VerifyAcct} from './verify';
import {SignOut} from './signout';
import {NoAuthGuard} from './_providers';

export const COMPONENTS = [Auth,SignOut,VerifyAcct];
export const DIRECTIVES = [];
export const PIPES = [];

const routes:Routes = [
	{path:'signin',component:Auth},
	{path:'signup',component:Auth},
	{path:'signout',component:SignOut},
	{path:'verify',component:VerifyAcct}];//,canActivate:[NoAuthGuard]}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);