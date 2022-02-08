import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchapiService {
  videos=new BehaviorSubject<any>(null);
  constructor(private http:HttpClient) { }

  getVideoList(searchContent?:string){
    
    return this.http.get<[]>('https://my-json-server.typicode.com/Uxtrendz/apis/VideoList?q='+searchContent)
  }
}
