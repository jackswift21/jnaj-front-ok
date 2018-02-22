import { Observable } from 'rxjs/Observable';
import { ItemModel,Search,AppSettings,NowPlaylistInterface } from '../models';
import { CMAppState } from '../../app.store';

export function getSearch$(state$: Observable<CMAppState>):Observable<Search>{
  return state$.select(state => state.search);};
export function getSearchResults$ (state$: Observable<CMAppState>): Observable<any[]> {
  return state$.select(state => state.search.results);};
export function getLayout$ ($state: Observable<CMAppState>): Observable<AppSettings> {
  return $state.select(state => state.layout);};
export function getNowPlaylist$ ($state: Observable<CMAppState>): Observable<NowPlaylistInterface> {
  return $state.select(state => state.nowPlaylist);};
export function getItemState$ ($state: Observable<CMAppState>): Observable<ItemModel> {
  return $state.select(state => state.item);};
export function getSidebarCollapsed$(state$: Observable<CMAppState>) {
  return state$.select((state) => state.layout.sidebarExpanded);}
export function getNavRoutes$(state$: Observable<CMAppState>) {
  return state$.select((state) => state.layout.routes);}
export function getSidebarExpanded($state: Observable<AppSettings>) {
  return $state.select(state => state.sidebarExpanded);}
function getMyState(s){console.log(s);return s.routes;}