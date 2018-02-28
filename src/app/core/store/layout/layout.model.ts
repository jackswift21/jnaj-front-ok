export interface AppVersion {
  semver:string;
  isNewAvailable:boolean;
  checkingForVersion:boolean;}
export interface AppNavRoute {
  route:string;
  label:string;
  query:object;
  icon?:string;
  title?:string;}
export const ROUTES_MAIN:AppNavRoute[] = [
  {route:"/search",query:{},label:'SEARCH',icon:"fa fa-search"},
  {route:"/samples",query:{},label:'SAMPLES',icon:"fa fa-th"},
  //{route:"/about",query:{},label:'ABOUT',icon:"fa fa-info"},
  //{route:"/pricing",query:{},label:'PRICING',icon:"fa fa-usd"},
  {route:"/contact",query:{subject:'general'},label:'CONTACT',icon:"fa fa-envelope"},
  {route:"/auth/signin",query:{},label:'SIGNIN',icon:"fa fa-user-circle"}];
export const ROUTES_FOOTER:AppNavRoute[] = [
  {route:'/contact',query:{subject:'advertise'},label:'Advertise With Us',title:'Advertise'},
  {route:'/contact',query:{subject:'invest'},label:'Invest In Us',title:'Invest'},
  {route:'/about',query:{},label:'About J.N.A.J.',title:'About'},
  {route:'/about/thanks',query:{},label:'Special Thanks',title:'Thanks'}];
export interface AppSettings {
  isIntro:boolean;
  sidebarOpen:boolean;
  requestInProcess:boolean;
  version:AppVersion;
  mainNav:AppNavRoute[];
  footerNav:AppNavRoute[];}
export const initialState:AppSettings = {
  isIntro:false,
  sidebarOpen:false,
  requestInProcess:false,
  version: {
    semver: '',
    isNewAvailable: false,
    checkingForVersion: false},
  mainNav:ROUTES_MAIN,
  footerNav:ROUTES_FOOTER};