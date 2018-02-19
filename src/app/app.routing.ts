import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

const routes:Routes = [
	{path:'',loadChildren:'./intro#IntroModule'},
	//{path:'home',redirectTo:'/en/home',pathMatch:'full'},
	{path:'home',loadChildren:'./home#HomeModule'},
	{path:'search',loadChildren:'./search#SearchModule'},
	{path:'contact',loadChildren:'./contact#ContactModule'},
	{path:'profiles',loadChildren:'./profiles#ProfilesModule'},
	{path:'samples',loadChildren:'./samples#SamplesModule'},
	{path:'auth',loadChildren:'./auth#AuthModule'},
	{path:'about',loadChildren:'./about#AboutModule'},
	{path:'hire',loadChildren:'./hire#HireModule'},
	{path:'pricing',loadChildren:'./pricing#PricingModule'},
	{path:'gallery',loadChildren:'./gallery#GalleryModule'},
	{path:'articles',loadChildren:'./articles#ArticlesModule'},
	{path:'**',loadChildren:'./not-found#NotFoundModule'},
];

export const ROUTING:ModuleWithProviders = RouterModule.forRoot(routes,{useHash:false});

/*{path:'profile',loadChildren:'./user#UserProfileModule'},
{path:'vendor',loadChildren:'./vendor#VendorProfileModule'},
{path:'vendorDash',loadChildren:'./dash#VendorDashboardModule'},
{path:'adminDash',loadChildren:'./admin#FudeziAdministratorModule'},
//{path:'editor',loadChildren:'./editor#EditorModule'},
//{path:'settings',loadChildren:'./settings#SettingsModule'},
{path:'article',loadChildren:'./article#ArticleModule'},
{path:'spotlight',loadChildren:'./article#ArticleModule'},
{path:'toh',loadChildren:'./toh#TohModule'},*/