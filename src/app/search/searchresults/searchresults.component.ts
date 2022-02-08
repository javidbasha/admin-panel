import { Component, OnInit } from '@angular/core';
import { SearchapiService } from '../shared/searchapi.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {
  videos=[];
  constructor(private httpServ:SearchapiService) { }

  ngOnInit(): void {
    this.httpServ.videos.subscribe(res=>{
      console.log('videos searced',res)
      this.videos=res;
    })
  }

}
