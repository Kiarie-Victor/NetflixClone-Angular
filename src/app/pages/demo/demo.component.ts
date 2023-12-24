import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostCardService } from 'src/app/service/postcard.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit{

  constructor(private service: PostCardService, private route:ActivatedRoute){}

  title = 'DirectiveExample';

  videos:any;

  mostLikedVideo:any;

  ngOnInit(): void {
    // this.service.getAllPostCards().then((data:any) => {
    //   console.log(data)
    //   this.videos = data;
    //   console.log(this.videos)
    //   this.mostLikedVideo = this.getMostLikedVideo()
    //   console.log(this.mostLikedVideo)
    // })

    this.videos = this.route.snapshot.data['posts']
    console.log(this.videos)
    this.mostLikedVideo = this.getMostLikedVideo()
    
  }


   getMostLikedVideo(){
    
        return this.videos.sort((curr:any, next:any) =>
          next.likes - curr.likes
        )[0]
   }



  

}
