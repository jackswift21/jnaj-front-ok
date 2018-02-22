export interface ClassCourse {
  id?: string;
  name?: string;}
export interface CMUserProfile {
  access_token: string;
  id: string;
  name: string;
  role: string;
  imageUrl?: string;
  //playlists: GoogleApiYouTubePlaylistResource[];
  data?:{
    courses:ClassCourse[];};
  nextPageToken?: string;
  viewedPlaylist?: string;}
export interface Item {
  id: string;
  type: string;
  desc: string;
  app_vars?: ItemVars;}
export interface ItemVars {
  status: string;
  actions:any[];}
export interface ItemForm {activeTab: string;}
export interface ItemModel {
  items: Item[];
  selectedItem:'';
  filter: string;
  createNew: boolean;
  form?:ItemForm;}
export const initialState: ItemModel = {
  items: [],
  selectedItem:'',
  filter: '',
  createNew: false};
  //form:{},};