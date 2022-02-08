import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, pluck, switchMap, tap } from 'rxjs/operators';
import { SearchapiService } from '../shared/searchapi.service';

@Component({
  selector: 'app-searchvideos',
  templateUrl: './searchvideos.component.html',
  styleUrls: ['./searchvideos.component.css']
})
export class SearchvideosComponent implements OnInit,AfterViewInit {
  @ViewChild('searchbar') searchbar:ElementRef;
  videosList=[];
  
  constructor(private httpServ:SearchapiService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    fromEvent(this.searchbar.nativeElement,'keyup').pipe(
      
      debounceTime(2000),
      distinctUntilChanged(),
      pluck('target','value'),
      switchMap(val=>
        { 
          let searchVal:any=val || '';
          return this.httpServ.getVideoList(searchVal)
        })
    ).subscribe(res=>{
      console.log('videos1')
      if(res){
        console.log('videos2')
        this.httpServ.videos.next(res);
      }
    })
  }

}
