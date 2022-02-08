import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface ResponseDataModel{
  idToken:string,
  expiresIn:string,
  refreshToken:string,
  localId:string
}
@Injectable({
  providedIn: 'root'
})
export class APICallsService {
  APIKey:string="AIzaSyB6V3Wk3e1zrlp2dYrQ0ZJBb2l31u-I3Xo";
  databaseLogin='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+this.APIKey;
  urlPosts="https://food-delivery-4da2d-default-rtdb.firebaseio.com/employees.json";
  urlRecipe="https://food-delivery-4da2d-default-rtdb.firebaseio.com/recipe.json"
  constructor(private http:HttpClient) { }

  loginDatabase(_email:string,_password:string){
    return this.http.post<ResponseDataModel>(this.databaseLogin,{email:_email,password:_password,returnSecureToken:true})
  }
  getData(dataType:string){
    if(dataType=="employee"){
      return this.http.get<any>(this.urlPosts)
    }
    else{
      return this.http.get<any>(this.urlRecipe)
    }
  }
}
