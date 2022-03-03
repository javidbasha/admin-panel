import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class UpdatehisService {
  comp_name:string;
  count:number=0;
  history:{}[]=[
    {
      proxy:"www.google.com",
      date:"01-01-2021"
    }
  ]
  constructor() { 
    
  }
  getCount(){
    
    console.log( `Count in update history serv is ${this.count} for ${this.comp_name}`);
  }
}
