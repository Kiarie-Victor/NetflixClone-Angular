import { Component,HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit{
  title = 'showtime';
  navBg:any;
  displayLoadingIndicator:boolean = false;

  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent:Event) => {
      if (routerEvent instanceof NavigationStart){
        this.displayLoadingIndicator = true
      };
      if (routerEvent instanceof NavigationEnd || 
        routerEvent instanceof NavigationCancel || 
        routerEvent instanceof NavigationCancel){
        this.displayLoadingIndicator = false
      }
    })
  }


//   @HostListener('document:scroll') scrollover(){
//    console.log(document.body.scrollTop,'scrolllength#');
    
//    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 0)
//    {
//     this.navBg = {
//        'background-color':'#000000'
//      }
//     }else
//    {
//        this.navBg = {}
//    }
//  }
}