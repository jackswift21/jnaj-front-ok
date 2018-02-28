import {Injectable } from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {JNAJAppState} from '../';
import {GoogleBasicProfile} from './user-profile.model';
import * as UserProfileActions from './user-profile.actions';
//import {UserProfile} from '../../services';//user-profile.service';
//import {Authorization} from '../../services';//authorization.service';

@Injectable()
export class UserProfileEffects {
  constructor(
    private actions$:Actions,
    //private userProfile:UserProfile,
    //private auth:Authorization
    ){}
  @Effect() updateToken$ = this.actions$
    .ofType(UserProfileActions.UPDATE_TOKEN)
    .map((action:UserProfileActions.updateToken) => action.payload)
    //.map((token: string) => this.auth.accessToken = token)
    .map(() => Observable.of(new UserProfileActions.test()));
    /*.switchMap(token => this.userProfile.getPlaylists(true)
      .catch((error:Error) => {
        here('error in fetching user\'s playlists', error);
        return of(error);}))
    .map(response => new UserProfileActions.updateData(response));*/
  @Effect() addUserPlaylists$ = this.actions$
    .ofType(UserProfileActions.UPDATE)
    .map((action:UserProfileActions.update) => action.payload)
    .map((data:any) => new UserProfileActions.addPlaylists(data.items));
  @Effect() updateNextPageToken$ = this.actions$
    .ofType(UserProfileActions.UPDATE)
    .map((action:UserProfileActions.update) => action.payload)
    .map(data => {
      const nextPageToken = data.nextPageToken;
      return nextPageToken?
        new UserProfileActions.updatePageToken(data.nextPageToken):
        new UserProfileActions.userProfileCompleted();});
  @Effect() getMorePlaylists$ = this.actions$
    .ofType(UserProfileActions.UPDATE_NEXT_PAGE_TOKEN)
    .map((action:UserProfileActions.updatePageToken) => action.payload)
    .map(() => Observable.of(new UserProfileActions.test()));
    /*.switchMap((pageToken:string) => {
      this.userProfile.updatePageToken(pageToken);
      return this.userProfile.getPlaylists(false);})
    .map(response => new UserProfileActions.updateData(response));*/
  @Effect() userProfileRecieved$ = this.actions$
    .ofType(UserProfileActions.USER_PROFILE_RECIEVED)
    .map((action:UserProfileActions.userProfileRecieved) => action.payload)
    //.map(profile  => this.userProfile.toUserJson(profile))
    .map((profile:GoogleBasicProfile) => new UserProfileActions.updateUserProfile(profile));
}