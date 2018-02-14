import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Headers,Http,Jsonp,Response,URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import {AppWindowService} from './window.service';

@Injectable()
export class ApiService {
  url = '';//environment.api_jnaj;
  constructor(private http:Http){}//,private _window:AppWindowService){}
  get(path:string,params:URLSearchParams = new URLSearchParams()):Observable<any>{
    let url = `${this.url}${path}`,headers = this.setHeaders(path),search = params;
    return this.http.get(url,{headers:headers,search:search})
    .catch(this.formatErrors)
    .map((res:Response) => res.json());}
  put(path:string,body:Object = {}):Observable<any>{
    return this.http.put(`${this.url}${path}`,JSON.stringify(body),{headers:this.setHeaders(path)})
    .catch(this.formatErrors)
    .map((res: Response) => res.json());}
  post(path:string,body: Object = {}):Observable<any>{
    return this.http.post(`${this.url}${path}`,JSON.stringify(body),{ headers: this.setHeaders(path)})
    .catch(this.formatErrors)
    .map((res:Response) => res.json());}
  delete(path):Observable<any>{
    return this.http.delete(`${this.url}${path}`,{ headers: this.setHeaders(path) })
    .catch(this.formatErrors)
    .map((res: Response) => res.json());}
  private setHeaders(path):Headers{
    const headersConfig = {'Content-Type': 'application/json','Accept': 'application/json'};
    //this._
    window['token']?(headersConfig['Authorization'] = `Token ${window['token']}`):null;
    return new Headers(headersConfig);}
  private formatErrors(error:any){
    let e = error instanceof Response?error.json():error;
    //console.log(e.name?);
    return Observable.throw(e);}
  /*send(path:string,file:any):Observable<any>{return Observable.create(observer => {
    let req = new XMLHttpRequest();
    req.open("POST",`${this.url}${path}`,true);
    this._window.token?req.setRequestHeader('Authorization',`Token ${this._window.token}`):null;
    req.onreadystatechange = function(){
      if(req.readyState == 4 && req.status == 200){console.log(req.responseText);observer.next(req.response);observer.complete();}
      if(400 < req.status && req.status < 500){observer.error({name:'error',message:req.statusText});}};
    req.send(new Blob(file));});};
  fetch(path:string):Observable<any>{return Observable.create(observer => {
    let req = new XMLHttpRequest();
    req.open('get',`${this.url}${path}`,true);
    this._window.token?req.setRequestHeader('Authorization',`Token ${this._window.token}`):null;
    req.responseType = "arraybuffer";
    req.onreadystatechange = function(){
      if(req.readyState == 4 && req.status == 200){observer.next(req.response);observer.complete();}
      if(400 < req.status && req.status < 500){observer.error({name:'error',message:req.statusText});}};
    req.send();});}*/
}
