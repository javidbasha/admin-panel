import { Component, ContentChild, Input, OnInit, Self, SkipSelf, TemplateRef } from '@angular/core';
import { HistoryService } from '../history.service';
import { UpdatehisService } from '../updatehis.service';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.css'],
  providers:[
    {
      provide:HistoryService,
      useExisting:UpdatehisService,
      
    }
  ]
  
})
export class ProxyComponent implements OnInit {
  @ContentChild('proxy') proxy:TemplateRef<any>;
  constructor( private serv1:HistoryService, private serv2:UpdatehisService) {
    console.log("proxy component");
    // this.serv1.count=100;
    // this.serv2.count=200;
    // this.serv1.comp_name="Proxycomponent";
    // this.serv2.comp_name="proxy 2 compnent";
    this.serv1.getCount();
    
    this.serv2.getCount();
  }

  ngOnInit(): void {
    
  }

}
