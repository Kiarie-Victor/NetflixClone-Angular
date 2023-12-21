import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  constructor (private service:MovieApiServiceService, private route: Router, private activatedRoute:ActivatedRoute){
  }

  // navigateElse(){
  //   this.route.navigate(['home'], {
  //     relativeTo:this.activatedRoute
  //   })
  // }
  searchResult:any;
  ngOnInit(): void {
  }



  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

submitForm()
  {
    this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
    console.log(result,'searchM\ovie#');
    this.searchResult = result.results;
    });
  }

}