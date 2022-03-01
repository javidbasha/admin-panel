import { Injectable } from '@angular/core';

@Injectable()
export class HistoryService {
  comp_name:string;
  history:{}[]=[
    {
      proxy:"www.google.com",
      date:"01-01-2021"
    }
    

  ]
  count:number=0;
  constructor() { 
    
  }
  getCount(){
    
    console.log( `Count is ${this.count} for ${this.comp_name}`);
  }
}
