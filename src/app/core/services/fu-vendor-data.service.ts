import { Injectable } from '@angular/core';
//import { FudeziApiService } from './web-api.service';

@Injectable()
export class FudeziVendorData {
  /*reviews = {
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
  vendor = {
    prefix:'http://10.0.0.6:3000',
    path:'/fe/v1/vendors',
    options:{}};
  constructor(private api:FudeziApiService){}
  fetchVendor(vendorId){
    console.log('check');
    const path = this.vendor.path+'/vendor/'+vendorId;
    const _apiOpts = Object.assign({},this.vendor,{path:path});
    return this.api
      .ready(_apiOpts)
      .fetch()
      .map(res => {return res.err?
        (() => {console.log('fetch vendor error',res.err);return res})():
        (() => {console.log('vendor',res.vendor);return res.vendor})();});}
  fetchVendorReviews(vendorId){
    const path = this.vendor.path+'/vendor/'+vendorId+'/reviews';
    const _apiOpts = Object.assign({},this.vendor,{path:path});
    return this.api
      .ready(_apiOpts)
      .fetch()
      .map(res => {return res.err?
        (() => {console.log('fetch reviews fail',res.err);return res})():
        (() => {console.log('reviews',res.reviews);return res.reviews})();});}
  fetchVendorOrders(vendorId){
    const path = this.vendor.path+'/vendor/'+vendorId+'/orders';
    const _apiOpts = Object.assign({},this.vendor,{path:path});
    return this.api
      .ready(_apiOpts)
      .fetch()
      .map(res => {return res.json().err?
        (() => {console.log('fetch orders fail',res.err);return res})():
        (() => {console.log('orders',res.orders);return res.orders})();});}
  createVendor(data){
    const path = this.vendor.path+'/new';
    const _apiOpts = Object.assign({},this.vendor,{path:path});
    return this.api
      .ready(_apiOpts)
      .post({data:data})
      .map(res => {return res.err?
        (() => {console.log('create vendor fail',res.err);return res})():
        (() => {console.log('new vendor',res.vendor);return res.vendor})();});}
  updateVendor(vendorId,updates){
    const path = this.vendor.path+'/vendor/'+vendorId;
    const _apiOpts = Object.assign({},this.vendor,{path:path});
    return this.api
      .ready(_apiOpts)
      .put(updates)
      .map(res => {return res.err?
        (() => {console.log('update vendor fail',res.err);return res})():
        (() => {console.log('updated',res.vendor);return res.vendor})();});}
  removeVendor(vendorId){
    const path = this.vendor.path+'/vendor/'+vendorId;
    const _apiOpts = Object.assign({},this.vendor,{path:path});
    return this.api
    .ready(_apiOpts)
    .delete()
    .map(res => {return res.err?
        (() => {console.log('delete vendor fail',res.err);return res})():
        (() => {console.log('deleted',res.deleted);return res.deleted})();});}
  removeVendors(){
    const path = this.vendor.path+'/vendors';
    const _apiOpts = Object.assign({},this.vendor,{path:path});
    return this.api
    .ready(_apiOpts)
    .delete()
    .map(res => {return res.err?
        (() => {console.log('delete all fail',res.err);return res})():
        (() => {console.log('deleted',res.deleted);return res.deleted})();});}
  likeVendor({vendorId,userId}){
    console.log('check');
    const path = this.vendor.path+'/vendor/'+vendorId+'/likes';
    const _apiOpts = Object.assign({},this.vendor,{path:path});
    return this.api
      .ready(_apiOpts)
      .post(userId)
      .map(res => {return res.err?
        (() => {console.log('like vendor error',res.err);return res})():
        (() => {console.log('vendor likes',res.likeCt);return res.likeCt})();});}
  rateVendor(vendorId,data){
    console.log('check');
    const path = this.vendor.path+'/vendor/'+vendorId+'/rating';
    const _apiOpts = Object.assign({},this.vendor,{path:path});
    return this.api
      .ready(_apiOpts)
      .put({data:data})
      .map(res => {return res.err?
        (() => {console.log('update rating error',res.err);return res})():
        (() => {console.log('updated rating',res.rating);return res})();});}
  faveVendor(vendorId,userId){
    console.log('check');
    const path = this.vendor.path+'/vendor/'+vendorId+'/faves';
    const _apiOpts = Object.assign({},this.vendor,{path:path});
    return this.api
      .ready(_apiOpts)
      .post({data:userId})
      .map(res => {return res.err?
        (() => {console.log('fave vendor error',res.err);return res})():
        (() => {console.log('fave vendor',res.faveCt);return res.faveCt})();});}
  convert(items:any[]){console.log(items);return items;}
  generateLocation({lat,lng}){
   return {
    lat:Math.floor(Math.random()*1)>0?
      (lat-.005*Math.floor(Math.random()*10)):
      (lat+.005*Math.floor(Math.random()*10)),
    lng:Math.floor(Math.random()*1)>0?
      (lng-.005*Math.floor(Math.random()*10)):
      (lng+.005*Math.floor(Math.random()*10))}}*/
}