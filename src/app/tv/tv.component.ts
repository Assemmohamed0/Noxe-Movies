import { Component, OnInit } from '@angular/core';
import { AlltrendingService } from '../alltrending.service'

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  tvArr:any[];
  imgPath:string = "https://image.tmdb.org/t/p/w500";

  constructor(_AlltrendingService:AlltrendingService) 
  { 
    _AlltrendingService.getTrinding("tv").subscribe( (data)=>{
      this.tvArr = data.results;
    } )
  }

  ngOnInit(): void {
  }

}
