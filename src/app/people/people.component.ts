import { Component, OnInit } from '@angular/core';
import { AlltrendingService } from '../alltrending.service'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peopleArr:any[];
  imgPath:string = "https://image.tmdb.org/t/p/w500";

  constructor(_AlltrendingService:AlltrendingService)
  { 
    _AlltrendingService.getTrinding("person").subscribe( (data)=>{
      this.peopleArr = data.results
    } )
  }

  ngOnInit(): void {
  }

}
