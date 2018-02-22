import { Injectable } from '@angular/core';
//import { FudeziApiService } from './web-api.service';

@Injectable()
export class FudeziUserData {
  /*user = {
    prefix:'http://10.0.0.6:3000',
    path:'/fe/v1/user',
    options:{}};
  auth = {
    prefix:'http://10.0.0.6:3000',
    path:'/fe/v1/auth',
    options:{}};
  reviews = { 
    prefix:'src/assets/data/reviews.json',
    path:'',
    options:{},
    idKey:'vendor',
    content:'application/json'};
  orders = {
    prefix:'src/assets/data/orders.json',
    path:'',
    options:{},
    idKey:'vendor',
    content:'application/json'};
  constructor(private api:FudeziApiService){}
  updatePageToken(pageToken: string){}//this.playlists.config.set('pageToken', pageToken);}
  resetPageToken(){}//{this.playlists.config.set('pageToken', '');}
  go(id){
    return this.api
      .ready(this.reviews)
      .fetch()
      .map(res => {return JSON.parse(res['_body'])});}//.reviews.filter(r => r.vendor == id)});}
  getSettings(id){
    return this.api
      .ready(this.reviews)
      .fetch()
      .map(res => {return JSON.parse(res['_body']).reviews.filter(r => r.vendor == id)});}
  getFaves(id){
    return this.api
      .ready(this.reviews)
      .fetch()
      .map(res => {return JSON.parse(res['_body']).reviews.filter(r => r.vendor == id)});}
  getReviews(id){
    return this.api
      .ready(this.reviews)
      .fetch()
      .map(res => {return JSON.parse(res['_body']).reviews.filter(r => r.vendor == id)});}
  getOrders(id){
    return this.api
      .ready(this.orders)
      .fetch()
      .map(res => {return JSON.parse(res['_body']).orders.filter(o => o.vendor == id)});}
  signIn(data){
    this.user.path+=
    return this.api
      .ready(this.user)
      .create(data)
      .map(res => {
        console.log('vendor_acct',res.json());
        return res.json();});}
  signIn(data){
    const path = this.auth.path+'/login';
    const _apiOpts = Object.assign({},this.auth,{path:path});
    return this.api
      .ready(_apiOpts)
      .post(data)
      .map(res => {
        console.log('profile',res.json().user);
        return res.json().user;});}
  convert(items:any[]){return items;}
  generateLocation({lat,lng}){}
    return {
      lat:Math.floor(Math.random()*1)>0?
        (lat-.005*Math.floor(Math.random()*10)):
        (lat+.005*Math.floor(Math.random()*10)),
      lng:Math.floor(Math.random()*1)>0?
        (lng-.005*Math.floor(Math.random()*10)):
        (lng+.005*Math.floor(Math.random()*10))}}
  getPlaylists(isNewPage: boolean){}
    const hasAccessToken = this.playlists.hasToken();
    if (!hasAccessToken) {return;}
    if (isNewPage) {this.playlists.resetPageToken();}
    this.isSearching = true;
    return this.playlists.getList();}*/
}