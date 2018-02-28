//single item model
export interface Sample {
	id: number;
	title: string;
	category: string;}

//state model
export interface SamplesState {samples:Sample[];}

//initial state
export const initialState:SamplesState = {samples:[]};

//model collections
export const JAVA_SAMPLES:Sample[] = [
    {id: 1, title: 'Java Sample 1', category: 'Java'},
    {id: 2, title: 'Java Sample 2', category: 'Java'}];
export const ANGULAR_SAMPLES:Sample[] = [
    {id: 1, title: 'Angular Sample 1', category: 'Angular'},
    {id: 2, title: 'Angular Sample 2', category: 'Angular'}];
export const FAVORITE_SAMPLES:Sample[] = [
    {id: 1, title: 'Java Sample 1', category: 'Java'},
    {id: 2, title: 'Angular Sample 2', category: 'Angular'}];