import { Inject, Injectable } from '@angular/core';
import { Check } from './check';


@Injectable()
export class ConfirmService implements Check {
  prefix:string;
  constructor() { }
  getDate(): string {
      return "this is confirm Service"+this.prefix
  }
}
