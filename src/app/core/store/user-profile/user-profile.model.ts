export interface GoogleBasicProfile {
  name?: string;
  imageUrl?: string;}
export interface UserProfile {
  access_token: string;
  playlists:any[],//GoogleApiYouTubePlaylistResource[];
  data?:{};
  nextPageToken?: string;
  profile:GoogleBasicProfile;
  viewedPlaylist?: string;}
export const initialUserState:UserProfile = {
  access_token: '',
  playlists: [],
  data: {},
  nextPageToken: '',
  profile: {},
  viewedPlaylist: ''};