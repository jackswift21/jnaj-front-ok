import {Observable} from 'rxjs/Observable';
import {AppSettings} from './layout.model';
import {JNAJAppState} from '../store';

export function $getLayout($s:Observable<JNAJAppState>):Observable<AppSettings>{return $s.select(s => s.layout);}
export function $getVersion($s:Observable<JNAJAppState>):Observable<any>{return $s.select(s => s.layout.version);}
export function $getSidebarOpen($s:Observable<AppSettings>){return $s.select(s => s.sidebarOpen);}

