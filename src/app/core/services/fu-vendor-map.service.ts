import { Injectable  } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
declare const google:any;
declare const MarkerClusterer:any;
//Create as many functions as you like to interact with the map object
//depending on our project we have had ones to 
//interact with street view, trigger resize events etc etc.

@Injectable()
export class FuVendorMapService {
  /*public clusterer: any;
  public fuMap = null;
  public markers = [];
  createMap(el,opts){
    return new Promise<boolean>(done => {
      el.nativeElement.innerHTML="<div id='map_canvas'></div>";
      opts.mapTypeId = google.maps.MapTypeId.ROADMAP,
      opts.center = new google.maps.LatLng(opts.center);
      this.fuMap = new google.maps.Map(document.getElementById('map_canvas'),opts);
      this.fuMap.setOptions({draggableCursor:'crosshair'});
      this.fuMap.addListener('click',(e) => this.getPoint(e));
      done(true);});}
  fetchMap(el){
    return new Promise<boolean>(done => {
      el.nativeElement.append(this.fuMap.getDiv());
      done(false);});}
  addVendorMarkers(vendors){
    const P = vendors.map(v => ({lat:v.lastLoc.lat,lng:v.lastLoc.lng}));
    return new Promise<any>(done => done(this.applyMarkers(P)));}
      //create any map listeners you want here. 
      //If you want to add data to the map and add listeners to those, I suggest a seperate service.
  applyMarkers(points){
    const markerIcon = {
      url: '/assets/icon/truck.png', // url
      scaledSize: new google.maps.Size(25,25)};
    const clusterStyle = {
      url: '/assets/icon/truck.png',
      height: 35,
      width: 35,
      textColor: '#FFF',
      textSize: 11,
      backgroundPosition: 'center center'};
    const clusterOpts = {
      imagePath: '/assets/icon/truck',
      gridSize: 70,
      styles: [clusterStyle,clusterStyle,clusterStyle]};
    this.clusterer?this.clusterer.clearMarkers():null;
    points.forEach(p => {
      const m = new google.maps.Marker({
        position: new google.maps.LatLng(p.lat,p.lng),
        icon:markerIcon});
      const info = //"<vendor-item [vendor]='vendor'></vendor-item>";
        '<div id="info-window"><strong>InfoWindow for Marker with:</strong> <br>' +
        'Latitude: ' + p.lat + '<br>' +
        'Longitude: ' + p.lng + '</div>';
      const infoWindow = new google.maps.InfoWindow({content:info});
      //m.addListener('click',() => this.toggleRoute(m,this.routes,40));
      m.addListener('mouseover',() => infoWindow.open(this.fuMap,m));
      m.addListener('mouseout',() => infoWindow.close(this.fuMap,m));
      this.markers.push(m);});
    this.clusterer = new MarkerClusterer(this.fuMap,this.markers,clusterOpts);
    console.log(this.markers);
    return true}
  getPoint(e){console.log(e.latLng.lat(),e.latLng.lng())}
  setPosition(m,p){m.setPosition(p);}*/
  //m.setAnimation(google.maps.Animation.BOUNCE);}
}