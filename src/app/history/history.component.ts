import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers:[
    {
      provide:HistoryService,
      useExisting:HistoryService
    }
  ]
})
export class HistoryComponent implements OnInit {
  historyData:{}[]=[];
  constructor(private historyServ:HistoryService) { 
    console.log("History component") 
    this.historyData=this.historyServ.history;
    this.historyServ.count=10;
    this.historyServ.comp_name="History Component"
    this.historyServ.getCount();
  }
  

  ngOnInit(): void {}
    

}
