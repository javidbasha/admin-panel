import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoggedIn:boolean=false;
  constructor() { }

  logIn(){
    this.userLoggedIn=true;
  }
  logOut(){
    this.userLoggedIn=false;
  }
}
