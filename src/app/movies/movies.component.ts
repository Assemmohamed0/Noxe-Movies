import { Component, OnInit } from '@angular/core';
import { AlltrendingService } from '../alltrending.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  moviesArr:any[];
  imgPath:string = "https://image.tmdb.org/t/p/w500";
  constructor(_AlltrendingService:AlltrendingService) 
  { 
    _AlltrendingService.getTrinding("movie").subscribe( (data)=>{

      this.moviesArr = data.results
      
    } )
  }

  ngOnInit(): void {
  }

}
