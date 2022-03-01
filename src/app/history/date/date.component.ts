import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  @ContentChild('date') date:TemplateRef<any>;
  constructor() { 
    console.log("data component")
  }

  ngOnInit(): void {
  }

}
