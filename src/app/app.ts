import {Component} from '@angular/core';
import {AppState,AppNavigationService} from './_providers';

@Component({
  selector: 'jnaj-app',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  constructor(private state:AppState,private nav:AppNavigationService){}
  ngOnInit(){this.state.initialize();}
 }

//analyzethis;
//this.analyzethis = new AnalyzeThis('ok')

