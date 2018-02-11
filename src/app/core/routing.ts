import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Route} from '@angular/router';
import {Header} from './header';
import {Footer} from './footer';
import {Sidebar} from './sidebar';
export const COMPONENTS = [Header,Footer,Sidebar];//FooterNav];
export const DIRECTIVES = [];
export const PIPES = [];
export const ROUTING:ModuleWithProviders = RouterModule.forChild([]);