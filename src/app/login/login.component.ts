import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APICallsService } from '../shared/apicalls.service';
import { AuthService } from '../shared/auth.service';
import { ResponseModel } from '../shared/ResponseModel.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  hide=true;
  
  constructor(
    private apiService:APICallsService,
    private route:Router,
    private activeRoute:ActivatedRoute,
    private authServ:AuthService) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
        'useremail':new FormControl('',[Validators.required,this.validateEmail]),
        'password':new FormControl('',Validators.required)
    });
   
  }
  validateEmail(control:AbstractControl){
    const filedvalue:string=control.value;
      console.log("index of :"+filedvalue.indexOf('@'))
      if(filedvalue.indexOf('@')<0){
        console.log("enter")
        return {invalidemail:true}
      }
      
      return null
  }
  getLoginData(){
    
    let email=this.loginForm.get('useremail')?.value;
    let password=this.loginForm.get('password')?.value;
    console.log(this.loginForm.get('useremail'));
    this.apiService.loginDatabase(email,password).subscribe(
      (data)=>{
        let responseData=new ResponseModel(data.idToken,data.expiresIn,data.refreshToken,data.localId)
        responseData.setAPIKey();
        this.authServ.logIn();
       
        setTimeout(()=>{
          localStorage.removeItem('key');
          this.route.navigate(['/login']);
          this.authServ.logOut();
      },+data.expiresIn*1000)
        this.route.navigate(['/posts',2]);
      
      },
      err=>{console.log(err)}
    )
  }

}
