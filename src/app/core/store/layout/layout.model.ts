export interface AppVersion {
  semver: string;
  isNewAvailable: boolean;
  checkingForVersion: boolean;}
export interface AppNavRoute {
  link: string;
  icon: string;
  label: string;}
export interface AppSettings {
  sidebarOpen:boolean;
  requestInProcess:boolean;
  version:AppVersion;
  routes:AppNavRoute[];}
export const initialState: AppSettings = {
  sidebarOpen:false,
  requestInProcess:false,
  version: {
    semver: '',
    isNewAvailable: false,
    checkingForVersion: false},
  routes: [
    { link: '/', icon: 'fa fa-music', label: 'Explore' },
    { link: '/user', icon: 'fa fa-heart', label: 'My Profile' },
    { link: '/agenda', icon: 'fa fa-list-alt', label: 'My Agenda' }]};