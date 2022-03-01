import { Inject, Injectable } from '@angular/core';
import { Check } from './check';
import { Reporter } from './reporter';
import { REPORTER } from './reporter.token';



@Injectable()
export class CheckserviceService implements Check{
  prefix: string;
  constructor(@Inject(REPORTER) private reports:ReadonlyArray<Reporter>) { }

  getDate(){
    this.reports.forEach(r=>r.report())
    return "this is check Service :"+this.prefix
  }
}
