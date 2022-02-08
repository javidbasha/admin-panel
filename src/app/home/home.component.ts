import { Component, OnInit } from '@angular/core';
import { SearchapiService } from '../search/shared/searchapi.service';
import { APICallsService } from '../shared/apicalls.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos:[]=[];
  constructor(private httpServ:SearchapiService) { }

  ngOnInit(): void {
    this.httpServ.getVideoList('angular').subscribe(data=>{
      this.videos=data;
      console.log(this.videos)
    })
  }

}
