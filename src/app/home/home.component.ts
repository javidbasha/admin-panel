import { AfterViewInit, Component, Host, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { CheckserviceService } from '../checkservice.service';
import { SearchapiService } from '../search/shared/searchapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //providers:[CheckserviceService]
})
export class HomeComponent implements OnInit,AfterViewInit {
  videos:[]=[];
  dateToday:Date=new Date();
  newForm:FormGroup;
  constructor(
    private httpServ:SearchapiService,
    private form:FormBuilder
  // private ckServ:CheckserviceService,
    //@SkipSelf() private ckServ1:CheckserviceService
  ) { 

    //this.ckServ.prefix="Home Component";
    //console.log(this.ckServ.getDate())
    //console.log(this.ckServ1.getDate())
   
  }

  ngOnInit(): void {
    this.httpServ.getVideoList('angular').subscribe(data=>{
      this.videos=data;
      console.log(this.videos)
    });
    this.newForm=this.form.group({
      'username':[''],
      'userpassword':['']
    })
   
  }
  ngAfterViewInit(): void {
    console.log(this.dateToday)
  }
  getFormDetails(){
    console.log(this.newForm);
  }
}
