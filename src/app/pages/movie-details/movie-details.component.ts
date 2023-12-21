import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy{
  routeParamObs: any;
  ngOnInit(): void {
    //let getParamId = this.router.snapshot.paramMap.get('id');
    let getParamId ;
    this.routeParamObs = this.router.paramMap.subscribe(
      (param) => {
        getParamId = param.get('id')
        this.getMovie(getParamId);
        this.getVideo(getParamId);
        this.getMovieCast(getParamId);
      }
    )
    
  }
  ngOnDestroy(){
    this.routeParamObs.unsubscribe()

  }

  constructor(private service:MovieApiServiceService, private router:ActivatedRoute) {}
getMovieDetailResult:any;
getMovieCastResult:any
getMovieVideoResult:any;
  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=>{
        console.log(result,'getmoviedetails#');
        this.getMovieDetailResult = result;
    });
  }
  getVideo(id:any)
  {
    this.service.getMovieVideo(id).subscribe((result)=>{
        result.results.forEach((element:any) => {
        if(element.type=="Trailer")
        {
          this.getMovieVideoResult = element.key;
        }
      });
    });
  }

  getMovieCast(id:any)
  {
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,'movieCast#');
      this.getMovieCastResult = result.cast;
    });
  }
}
