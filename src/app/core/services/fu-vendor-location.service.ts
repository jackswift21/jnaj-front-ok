import { Injectable  } from '@angular/core';
import { Observable,ReplaySubject } from 'rxjs';
//import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class FuVendorLocations {
  /*private finalLoc$: ReplaySubject<boolean> = new ReplaySubject(1);
  routes:any[] = [
    {lat:29.88351825,lng:-95.29309273,km:1.397},
    {lat:29.88310895,lng:-95.28768534,km:0.5233},
    {lat:29.89136911,lng:-95.28781414,km:0.9186},
    {lat:29.89095984,lng:-95.28948784,km:0.1676}];
  watchVendors(vendors){
    Observable
    .interval(30000)
    //.takeUntil(this.finalLoc$)
    .subscribe(() => {
      has
      const linDist0 = this.linearDist(p,q);
      p = {lat:p.lat+r.lat,lng:p.lng+r.lng};
      const linDist1 = this.linearDist(p,q);
      linDist1>=linDist0?
        (() => {this.finalLoc$.next(true);done();})():
        m.setPosition(p);});});}
  /*toggleRoute(m,r,s){
    for(var i=0;i<r.length;){
      this.getDegChgRate({
        lat:m.position.lat(),lng:m.position.lng()},r[i],s)
        .then((rate) => this.togglePosition(m,r[i],rate))
        .then(() => {console.log('ok');i++;});}}
  getDegChgRate(prev,next,s){
    return new Promise<any>(done => {
      const diffDeg = {
        lat:next.lat - prev.lat,
        lng:next.lng - prev.lng};
      const distMi = next.km*.621371;
      const timeMIN = distMi*(1/s)*60;
      const timeSec = distMi*(1/s)*60*60;
      const degChgPer3rdSec = {
        lat:diffDeg.lat/(timeSec*3.33333333),
        lng:diffDeg.lng/(timeSec*3.33333333)};
        //console.log(degChgTenthSec);
      done(degChgPer3rdSec);});}
  linearDist(p,q){
    return Math.sqrt(Math.pow(q.lat-p.lat,2)+
      Math.pow(q.lng-p.lng,2));}*/
}