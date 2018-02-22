import { Injectable } from '@angular/core';
//import { FudeziApiService } from './web-api.service';
import { Authorization } from './authorization.service';

@Injectable()
export class CensusGeocoder {
  /*censusLocSearch = {
    prefix:'https://geocoding.geo.census.gov/geocoder',
    path:'/locations/onelineaddress',
    options:{
      benchmark:'9',
      format:'jsonp',
      callback:'JSONP_CALLBACK'}};
  censusXYSearch = {
    prefix:'https://geocoding.geo.census.gov/geocoder',
    path:'/geographies/coordinates',
    options:{
      benchmark:'Public_AR_Current',
      vintage:'ACS2015_Current',
      layers:`
        States,
        Counties,
        2010 Census ZIP Code Tabulation Areas,
        2010 Census Urbanized Areas`,
      format:'jsonp',
      callback:'JSONP_CALLBACK'}};
  constructor(private api:FudeziApiService){}
  searchXY(q){
    return this.api
    .ready(this.censusXYSearch)
    .fetchJsonp(this.prepareQuery(q))
    .map(
      (res) => {return this.convert(res)},
      (err) => {console.log(err);return err});}
  searchAddress(q){
    return this.api
      .ready(this.censusLocSearch)
      .fetchJsonp(this.prepareQuery(q))
      .map(
        (res) => {return this.convertXY(res)},
        (err) => {console.log(err);return err});}
  prepareQuery(q){
    let opts = this.censusXYSearch.options;
    let querystr = '?';
    Object.keys(q).map((key,i) =>{
      querystr+=key+'='+q[key];
      querystr=querystr + '&';});
    Object.keys(opts).map((key,i) =>{
      querystr+=key+'='+opts[key];
      let ampersand = Object.keys(opts).length-1!==i?'&':'';
      querystr= querystr + ampersand;});
    return querystr;}
  convert(loc){
    return {
      cityState:loc.result.geographies['2010 Census Urbanized Areas'][0].BASENAME,
      zip:loc.result.geographies['2010 Census ZIP Code Tabulation Areas'][0].BASENAME,
      county:loc.result.geographies['Counties'][0].BASENAME,
      state:loc.result.geographies['States'][0].BASENAME}}
  convertXY(loc){
    console.log(loc);
    return {
      addressComponents:loc.result.addressMatches[0].addressComponents,
      matchedAddress:loc.result.addressMatches[0].matchedAddress,
      xy:loc.result.addressMatches[0].coordinates}}*/
}