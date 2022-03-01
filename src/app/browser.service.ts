import { Injectable } from '@angular/core';
import { Reporter } from './reporter';

@Injectable({
  providedIn: 'root'
})
export class BrowserService implements Reporter {

  constructor() { }

  report(){
    console.log("This is browser serive");
  }
}
