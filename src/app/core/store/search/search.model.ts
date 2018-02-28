export interface PresetParam {
  label:string;
  value:any;}
export interface Search {
  query:string;
  suggestions:string[];
  filter:string;
  queryParams:{
    preset:string;
    duration:number;};
  pageToken:{
    next:string;
    prev:string;};
  isSearching:boolean;
  isAdvSearch:boolean;
  results:any[];
  err:Error;}
export const initialState:Search = {
  query:'',
  filter:'',
  suggestions:[],
  queryParams:{
    preset:'',
    duration:-1},
  pageToken:{
    next:'',
    prev:''},
  isSearching:false,
  isAdvSearch:false,
  results:[],
  err:null};

//interface SearchQueryParam {[property:string]: any;}