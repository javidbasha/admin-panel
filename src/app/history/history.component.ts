import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';
import { UpdatehisService } from './updatehis.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers:[UpdatehisService
  ]
})
export class HistoryComponent implements OnInit {
  historyData:{}[]=[];
  constructor(private historyServ:UpdatehisService) { 
    console.log("History component") 
    this.historyData=this.historyServ.history;
    this.historyServ.count=10;
    this.historyServ.comp_name="History Component"
    this.historyServ.getCount();
  }
  

  ngOnInit(): void {}
    

}
