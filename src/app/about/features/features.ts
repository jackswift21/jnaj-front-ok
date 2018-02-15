import { Component } from '@angular/core';
declare const $:any;
declare const here:any;

@Component({
  selector: 'features',
  templateUrl: './features.html',
  styleUrls: ['./features.css']
})

export class AppFeaturesList {
	angFeatures =[
		{npm:'Express',desc:'Angular App Server',date:'2/05/2018'},
		{npm:'Angular Service',desc:'Api Service - manages methods, headers and error handling for Http requests',date:'2/09/2018'},
		{npm:'Angular Service',desc:'App State (to be replaced with NgRX)',date:'2/13/2018'},
		{npm:'Angular(FormBuilder), NgxTypeahead',desc:'Search Typeahead using Youtube suggestion terms',date:'*2/15/2018'},
		{npm:'Angular(FormBuilder), NgxTypeahead',desc:'Search Typeahead using JNAJ suggestion terms',date:'**02-2018'},
		{npm:'Angular Module/Component',
			desc:'Sample Container - Should take JS code sample as text, then execute as pure JS within Ang component',
			date:'**02-2018'},
		{npm:'Angular Module/Component',desc:'Simple Simon Sample',date:'**02-2018'},
		{npm:'HammerJS',desc:'Touch Events',date:'**02-2018'},
		{npm:'NgRX',desc:'Begin adding models, actions, redu',date:'**02-2018'},
		];
	nodeFeatures = [
		{npm:'Express',desc:'Api Server',date:'2/01/2018'},
		{npm:'Mongoose',desc:'DB Schemas - User, User Profile',date:'2/14/2018'},
		{npm:'Passport',desc:'Local & JWT Authentication',date:'2/15/2018'},
		{npm:'Express',desc:'Api Routes - Users',date:'2/15/2018'},
		{npm:'Express',desc:'Api Routes - Articles',date:'2/15/2018'},
		{npm:'Express',desc:'Api Routes - Comments',date:'2/15/2018'},
		{npm:'Mongoose',desc:'DB Schema - Article',date:'*2/15/2018'},
		{npm:'Mongoose',desc:'DB Schema - Comment',date:'*2/15/2018'},
		{npm:'Express',desc:'Api Routes - Samples',date:'*2/16/2018'},
		{npm:'Mongoose',desc:'DB Schema - Sample',date:'*2/16/2018'},
		{npm:'Express',desc:'Api Routes - Search',date:'*2/16/2018'},
		{npm:'Express',desc:'Api Routes - Employer Profile',date:'**02-2018'},
		{npm:'Express',desc:'Api Routes - Hiring Inquiries',date:'2/15/2018'},
		{npm:'Mongoose',desc:'DB Schema - Hiring Inquiry',date:'*2/15/2018'},
		{npm:'Express',desc:'Api Routes - Contact JNAJ',date:'*2/15/2018'},
		{npm:'Nodemailer',desc:'Send Contact JNAJ Email',date:'*2/15/2018'},
		{npm:'Nodemailer',desc:'Send Hiring Inquiry Email',date:'*2/15/2018'},
		{npm:'Express',desc:'Api Routes - Verify Acct',date:'**02-2018'},
		{npm:'Nodemailer',desc:'Send Acct Verification Email',date:'**02-2018'},
		{npm:'SocketIO',desc:'Send DB data responses via secure socket',date:'*02-2018'},
		{npm:'Typescript',desc:'Convert Node App to Typescript with testing',date:'*03-2018'},
		];
	issues = [
		{name:'MongoDB Connection String',
		desc:'Cannot get Heroku Node/Express app server to parse '+
		'MongoDB connection string properly when used as environment variable '+
		'or as constant declared within app.js file. Ampersands are properly escaped. '+
		'When running app locally, connection to MongoDB cloud works perfectly. '+
		'Could be related to Heroku platform preference/requirement of using MongoDB addon only '+
		'vs connecting thru string.',
		open:true}];
}

