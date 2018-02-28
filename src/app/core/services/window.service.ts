import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {deviceSizes} from './device-sizes';
import {clientStrings} from './client-strings';
declare const swfobject:any;
declare const here:any;
declare const hereW:any;
declare const $:any;

@Injectable()
export class AppWindowService {
  constructor(private http:Http){}
  refresh(bool){return window.location.reload(bool);}
  scroll(y?:number){return y?window.scrollTo(0,y):$(window).scrollTop();}
  get _url(){return window.URL.createObjectURL;}
  get selection(){return window.getSelection().toString();}
  get token():string{return window.name||window.sessionStorage['jnajTkn']||window.localStorage['jnajTkn']||'';}
  set token(t:string){t?window.localStorage.setItem('jnajTkn',t):window.localStorage.removeItem('jnajTkn');}
  get state(){return window.localStorage['jnajAppState']?JSON.parse(window.localStorage['jnajAppState']):undefined}
  set state(s:object){s?window.localStorage['jnajAppState'] = JSON.stringify(s):delete window.localStorage['jnajAppState'];}
  get geolocation():Promise<Object>{return new Promise(done => this.geolocate(done)).then(loc => this.formatLoc(loc));}
  private geolocate(done){return window.navigator.geolocation.getCurrentPosition(done);}
  private formatLoc(loc:object):Object{return {lat:loc['coords'].latitude,lng:loc['coords'].longitude};}
  locateIP(ip){return this.http.get("https://www.iplocation.net/?query="+ip).map(res => res.json())}
  getCookie(cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++){
      var c = ca[i];
      while (c.charAt(0) == ' '){c = c.substring(1);}
      if(c.indexOf(name) == 0){return c.substring(name.length, c.length);}}
    return "";}
  get page(){return window.location;}
  get history(){return window.history;}
  get rtcIP(){
    let rtcStr;
    return new Promise(done => {
      let RTCPeerConnection = window['RTCPeerConnection']||
        window['webkitRTCPeerConnection']||
        window['mozRTCPeerConnection'];
      if(RTCPeerConnection)(function(){
        let rtc = new RTCPeerConnection({iceServers:[]});
        if(window['mozRTCPeerConnection']){rtc.createDataChannel('',{reliable:false});}
        rtc.onicecandidate = function(evt){if(evt.candidate) grepSDP(evt.candidate.candidate);};  
        rtc.createOffer(offerDesc => {
          //console.log(offerDesc);
          grepSDP(offerDesc.sdp);
          rtc.setLocalDescription(offerDesc);},
          e => hereW("offer failed", e));
        let addrs = Object.create(null);
        addrs["0.0.0.0"] = false;
        function grepSDP(sdp){
          var hosts = []; 
          sdp.split('\r\n').forEach(line => {
            if(line.includes("a=candidate")){
              var parts = line.split(' '),addr = parts[4],type = parts[7];
              if(type === 'host') addAddress(addr);}
            else if(line.includes("c=")){
              var parts = line.split(' '),addr = parts[2];
              addAddress(addr);}
            else if(line.includes("o=")){
              var parts = line.substr(line.indexOf('IP')).split(' '),addr = parts[1];
              addAddress(addr);}});
          done();}
        function addAddress(newAddr){
          if (newAddr in addrs) return;
          else addrs[newAddr] = true;
          let displayAddrs = Object.keys(addrs).filter(k => addrs[k]);
          //here(displayAddrs);
          rtcStr += displayAddrs.join(" or perhaps ") || "n/a";}})();})
    .then(() => rtcStr);}
  get noRtcIP(){
    let cmd = "<code>ifconfig | grep inet | grep -v inet6 | cut -d\" \" -f2 | tail -n1</code>",
    iplist = document.createElement('div');
    iplist.innerHTML = cmd;
    return iplist.innerHTML.includes('<code>')?'':iplist.innerHTML;}
  get browser(){
    let nAgt = navigator.userAgent,
    browser = navigator.appName,
    version = '' + parseFloat(navigator.appVersion),
    majorVersion = parseInt(navigator.appVersion,10),
    nameOffset,verOffset,ix;
    if((verOffset = nAgt.indexOf('Opera'))+1){browser = 'Opera';version = nAgt.substring(verOffset + 6);
    if((verOffset = nAgt.indexOf('Version'))+1){version = nAgt.substring(verOffset+8);}}
    if((verOffset = nAgt.indexOf('OPR')) != -1){browser = 'Opera';version = nAgt.substring(verOffset+4);}
    else if((verOffset = nAgt.indexOf('Edge'))+1){browser = 'MS Edge';version = nAgt.substring(verOffset+5);}
    else if((verOffset = nAgt.indexOf('MSIE'))+1){browser = 'MS Internet Explorer';version = nAgt.substring(verOffset+5);}
    else if((verOffset = nAgt.indexOf('Chrome'))+1){browser = 'Chrome';version = nAgt.substring(verOffset + 7);}
    else if((verOffset = nAgt.indexOf('Safari'))+1){browser = 'Safari';version = nAgt.substring(verOffset + 7);
    if ((verOffset = nAgt.indexOf('Version')) != -1){version = nAgt.substring(verOffset + 8);}}
    else if((verOffset = nAgt.indexOf('Firefox'))+1){browser = 'Firefox';version = nAgt.substring(verOffset + 8);}
    else if(nAgt.indexOf('Trident/')+1){browser = 'Microsoft Internet Explorer';version = nAgt.substring(nAgt.indexOf('rv:') + 3);}
    else if((nameOffset = nAgt.lastIndexOf(' ')+1)<(verOffset = nAgt.lastIndexOf('/'))){
      browser = nAgt.substring(nameOffset,verOffset);
      version = nAgt.substring(verOffset + 1);
      if(browser.toLowerCase() == browser.toUpperCase()){browser = navigator.appName;}}
    if((ix = version.indexOf(';'))+1) version = version.substring(0,ix);
    if((ix = version.indexOf(' '))+1) version = version.substring(0,ix);
    if((ix = version.indexOf(')'))+1) version = version.substring(0,ix);
    majorVersion = parseInt('' + version,10);
    if(isNaN(majorVersion)){
      version = '' + parseFloat(navigator.appVersion);
      majorVersion = parseInt(navigator.appVersion,10);}
    return {name:browser,version:version,majorVersion:majorVersion};}
  get os(){
    let os = '-',nAgt = navigator.userAgent,nVer = navigator.appVersion;
    for(var id in clientStrings){if(clientStrings[id].r.test(nAgt)){os = clientStrings[id].s;break;}}
    let osVersion = '-';
    if(/Windows/.test(os)){os = 'Windows',osVersion = /Windows (.*)/.exec(os)[1];}
    switch(os){
      case 'Mac OS X':osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];break;
      case 'Android':osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];break;
      case 'iOS':let a = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);osVersion = `${a[1]}.${a[2]}.${a[3]||'0'}`;break;}
    return {name:os,version:osVersion}}
  get cookies(){
    let cookies = (navigator.cookieEnabled)?true:false;
    if(typeof navigator.cookieEnabled == 'undefined'&&!cookies){
      document.cookie = 'testcookie';
      cookies = (document.cookie.indexOf('testcookie')+1)?true:false;}
    return cookies}
  get device(){
    return {
      agent:navigator.userAgent,
      os:this.os,
      browser:this.browser,
      screen:{
        width:screen.width?screen.width:'',
        height:screen.height?screen.height:'',
        depth:screen.pixelDepth?screen.pixelDepth:''},
      type:deviceSizes.filter(s => screen.width>s.pixels[0]&&screen.width>s.pixels[1])[0].name,
      isMobile:/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion),
      cookies:this.cookies,
      plugins:navigator.plugins.length,
      mimes:navigator.mimeTypes.length};}
  get pseudofier(){return JSON.stringify(this.device).replace(/\D+/g,'');}
}