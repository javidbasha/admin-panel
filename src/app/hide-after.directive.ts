import { AfterViewInit, Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[HideAfter]'
})
export class HideAfterDirective implements OnInit {
  @Input() HideAfter:TemplateRef<any>;

  constructor(private viewContent:ViewContainerRef,private temp:TemplateRef<any>) { }

  ngOnInit(){
    this.viewContent.clear();
    setTimeout(()=>{
      this.viewContent.createEmbeddedView(this.HideAfter)
      
    },5000)
    

  }
 

}
