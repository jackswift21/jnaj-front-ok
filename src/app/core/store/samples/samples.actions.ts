import {Action} from '@ngrx/store';
import {Sample} from './samples.model';

export const JAVA = 'Java';
export const ANGULAR = 'Angular';
export const MY_SAMPLES = 'Favorite_Samples';
export class LoadJavaSamples implements Action {readonly type = JAVA;}
export class LoadAngularSamples implements Action {readonly type = ANGULAR;}
export class LoadFavoriteSamples implements Action {readonly type = MY_SAMPLES;constructor(public payload:Sample[]){}}

export type All = 
LoadJavaSamples|
LoadAngularSamples|
LoadFavoriteSamples;