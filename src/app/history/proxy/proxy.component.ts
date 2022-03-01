import { Component, ContentChild, Input, OnInit, Self, SkipSelf, TemplateRef } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.css'],
  
})
export class ProxyComponent implements OnInit {
  @ContentChild('proxy') proxy:TemplateRef<any>;
  constructor( private serv1:HistoryService) {
    console.log("proxy component") 
    this.serv1.comp_name="Proxycomponent";
    this.serv1.getCount();
  }

  ngOnInit(): void {
    
  }

}
