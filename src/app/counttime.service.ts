import { Inject, Injectable } from '@angular/core';
import { BrowserService } from './browser.service';
import { CheckserviceService } from './checkservice.service';
import { Reporter } from './reporter';
import { REPORTER } from './reporter.token';

@Injectable({
  providedIn: 'root'
})
export class CounttimeService implements Reporter {

  constructor () { }

  report(){
    console.log("This is Counttime serive");
  }
}
