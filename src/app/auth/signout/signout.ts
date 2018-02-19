import {Component} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {AuthService} from '../_providers';
declare const $:any;
declare const here:any;

@Component({
  selector: 'signout',
  templateUrl: './signout.html',
  styleUrls: ['./signout.css']
})

export class SignOut {
  constructor(private router:Router,private auth:AuthService){}
  ngOnInit(){this.auth.logout().subscribe(data => 
    setTimeout(() => {
      here(data);
      this.router.navigateByUrl('/home')},2000));}
}
  