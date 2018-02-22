import { Observable } from 'rxjs/Observable';
import { FooState } from '../store';
import { ItemModel } from './item.model';

/*export function getUser$(state$: Observable<EchoesState>): Observable<Assignments> {return state$.select(s => s.user);}
export function getUserPlaylists$(
	state$: Observable<EchoesState>): 
	Observable<GoogleApiYouTubePlaylistResource[]> {
  return state$.select(state => state.user.playlists);}
export function getUserViewPlaylist$(state$: Observable<EchoesState>) {return state$.select(s => s.user.viewedPlaylist);}
export function getIsUserSignedIn$(state$: Observable<EchoesState>) {
  return state$.select(s => {return s.user.access_token !== ''; });}
export function getAppLayout$(state$: Observable<EchoesState>): Observable<any>{
	return state$.select(s => s.appLayout);}
export function getAppVersion$(state$: Observable<EchoesState>): Observable<any>{
	return state$.select(s => s.appLayout.version);}
//getAssignments$ = (state$: Observable<EchoesState>) =>(state$.select(s => s.appLayout));*/

//export {getAssignments$};