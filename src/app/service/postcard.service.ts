import { Injectable } from "@angular/core";

@Injectable()
export class PostCardService{
    videos = [
        {title: 'My video 1', share: 415, likes: 257, dislikes: 12, thumbnail: 'assets/images/image1.jpg'},
        {title: 'My video 2', share: 215, likes: 325, dislikes: 12, thumbnail: 'assets/images/image2.jpg'},
        {title: 'My video 3', share: 513, likes: 105, dislikes: 12, thumbnail: 'assets/images/image3.jpg'},
        {title: 'My video 3', share: 53, likes: 35, dislikes: 12, thumbnail: 'assets/images/cheet.jpg'},
        {title: 'My video 3', share: 543, likes: 105, dislikes: 12, thumbnail: 'assets/images/ubuntu.jpg'}
      ]

      getAllPostCards(): Promise<{}>{
        const postList:Promise<{}>= new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.videos);
            }, 7000)
        });
        return postList;
      }
}