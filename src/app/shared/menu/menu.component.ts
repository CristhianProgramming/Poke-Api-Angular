import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  public banner : boolean = true ; 

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe(events => {
    if(events instanceof NavigationEnd){
      console.log(events)
      if(events.url !== '/') {
        this.banner = false;
      }else{
        this.banner = true;
      }
    }
    }); 
  }

  
}
