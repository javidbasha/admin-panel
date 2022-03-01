import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-chproj',
  templateUrl: './chproj.component.html',
  styleUrls: ['./chproj.component.css']
})
export class ChprojComponent implements OnInit {
  showthis:boolean=true;
  @Input('datapro') projectdata:TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
