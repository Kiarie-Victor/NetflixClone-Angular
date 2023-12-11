import { Component,HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'showtime';
  navBg:any;
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