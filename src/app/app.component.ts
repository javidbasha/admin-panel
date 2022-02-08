import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { FormBuilder, FormGroup } from '@angular/forms';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AdaminPanel';
  count=5;
  progress=50;
  open=false;
  progressSub: Subscription = new Subscription;
  incCount(){
    this.count++;
  }
  ngOnInit(){
  //  this.progressSub= interval(1000).subscribe(observer=>{
  //     console.log(observer)
  //     if(this.progress>99){
  //       console.log(this.progress)
  //       this.progressSub.unsubscribe();
  //     }
  //     this.progress=this.progress+observer;
     
  //   })
  }
  
}
