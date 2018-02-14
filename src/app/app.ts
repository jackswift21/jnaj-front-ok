import {Component} from '@angular/core';
import {AppState} from './app.state';

@Component({
  selector: 'jnaj-app',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'app';
  constructor(private appState:AppState){}
  //analyzethis;
  //this.analyzethis = new AnalyzeThis('ok')
}

