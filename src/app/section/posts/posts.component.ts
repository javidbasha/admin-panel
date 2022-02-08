import { Component, OnInit } from '@angular/core';
import { APICallsService } from 'src/app/shared/apicalls.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts={};
  constructor(private postService:APICallsService) { }

  ngOnInit(): void {
    
  }
  getUserData(dataType:string){
    this.postService.getData(dataType).pipe(
      map(res=>{
        let data=[];
        for(let key in res){
          data=res[key]
        }
        return data;
      })).subscribe(
        res=>{
          this.posts=res;
          console.log(res)
        },
        err=>{89
          console.log(err)
        }
    );
  }

}
