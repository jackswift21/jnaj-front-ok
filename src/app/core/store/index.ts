import { EffectsModule } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

//import { item,ItemState,ItemActions,ItemEffects } from './items';
//import { player,VideoPlayerState,VideoPlayerActions,VideoPlayerEffects } from './video-player';
//import { nowPlaylist,NowPlaylistInterface,NowPlaylistActions,NowPlaylistEffects } from './now-playlist';
//import { user,UserProfile,UserProfileActions,UserProfileEffects } from './user-profile';
//import { search,Search,SearchActions,SearchEffects } from './search';
import {layout,AppSettings,LayoutActions,LayoutEffects} from './layout';
//import { vendor,VendorState,VendorActions,VendorEffects } from './vendors';

export interface JNAJAppState {
  layout:AppSettings;
}

  //item:ItemState;
  //player:VideoPlayerState;
  //nowPlaylist:NowPlaylistInterface;
  //user:UserProfile;
  //search:Search;
  //vendor:VendorState;
export let JNAJReducers = {
  //player,
  //nowPlaylist,
  //user,
  //search,
  layout,
  //item
};
export let JNAJActions = [
  //ItemActions,
  //VideoPlayerActions,
  //NowPlaylistActions,
  //UserProfileActions,
  //SearchActions,
  LayoutActions,
  //VendorActions
];
export const EFFECTS = [
  //EffectsModule.run(ItemEffects),
  //EffectsModule.run(VideoPlayerEffects),
  //EffectsModule.run(NowPlaylistEffects),
  //EffectsModule.run(UserProfileEffects),
  //EffectsModule.run(SearchEffects),
  EffectsModule.run(LayoutEffects),
  //EffectsModule.run(VendorEffects)
];
//export function getPlayerSearch$(state$: Observable<FooState>):Observable<Search>{
  //return state$.select(state => state.search);};
//export function getPlayerSearchResults$ (state$: Observable<FooState>): Observable<any[]> {
  //return state$.select(state => state.search.results);};
export function $getAppLayout($s:Observable<JNAJState>):Observable<AppSettings>{return $s.select(s => s.appLayout);};
//export function getNowPlaylist$ ($state: Observable<FooState>): Observable<NowPlaylistInterface> {
  //return $state.select(state => state.nowPlaylist);};
//export function getItem$ ($state: Observable<FooState>): Observable<ItemState> {
  //return $state.select(state => state.item);};

function getMyState(s){console.log(s);return s.assignment;}