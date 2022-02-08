import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {
  @ViewChild('username') user_name:MatInput;
  constructor() { }

  ngOnInit(): void {

  }
  
  formData(form:NgForm){
    console.log(form);
    console.log(this.user_name);
  }

}
