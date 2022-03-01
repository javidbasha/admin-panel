import { AfterViewInit, Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ChprojComponent } from '../chproj/chproj.component';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit,AfterViewInit {
  @Input('datepass') datepass:TemplateRef<any>;
  @ViewChild(ChprojComponent) childProject:ChprojComponent;
  @ViewChild('textref') textref:ElementRef;
  constructor() { }

  ngOnInit(): void {
   
  }
  ngAfterViewInit(): void {
      this.childProject.showthis=false;
      
    this.textref.nativeElement.style.color="red";
  }
}
