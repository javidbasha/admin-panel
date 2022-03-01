import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Injector, OnChanges, OnInit, Optional, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { FormBuilder, FormGroup } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { CheckserviceService } from './checkservice.service';
import { ConfirmService } from './confirm.service';
import { AppConfig, APP_CONFIG, LegacyLoogger } from './config.token';
import { REPORTER } from './reporter.token';
import { CounttimeService } from './counttime.service';


// export function loggFactory(injector:Injector): any{
  
//     return injector.get(APP_CONFIG).expEnabled ? new ConfirmService() : new CheckserviceService();


// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    // {
    //   provide:CheckserviceService,
    //   useFactory:loggFactory,
    //   deps:[Injector],
    //   multi:true
    // },
    {
      provide:CheckserviceService,
      useClass:CheckserviceService,
      //multi:true
    },
    
    {
      provide:REPORTER,
      useExisting:CounttimeService,
      multi:true
    },
    // {
    //   provide:CheckserviceService,
    //   useValue:LegacyLoogger,
    //   multi:true 
    // }
  ]
 
})
export class AppComponent implements OnInit {
  constructor(@Optional() private serv: CheckserviceService){
    console.log(this.serv)
    this.serv.prefix="App module";
    this.serv.getDate()
  }
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
