//declare const here:any;
import {UrlSerializer, UrlTree, DefaultUrlSerializer} from '@angular/router';
export class CustomUrlSerializer implements UrlSerializer {
  parse(url:any): UrlTree {
    let dus = new DefaultUrlSerializer();
    url = url.replace(/\,/g,'%2C').replace(/\+/g,'%20');
    return dus.parse(url);}
  serialize(tree:UrlTree): any {
    let dus = new DefaultUrlSerializer(),path = dus.serialize(tree);
    return path.replace(/%2C/g,',').replace(/%20/g,'+');}}