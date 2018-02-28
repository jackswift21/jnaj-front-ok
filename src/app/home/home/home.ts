import { Component } from '@angular/core';
import {AppEvents} from '../../core';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home {
  title = 'app';
  constructor(private app:AppEvents){}
  ngOnInit(){this.app.do('testAction');}
}
