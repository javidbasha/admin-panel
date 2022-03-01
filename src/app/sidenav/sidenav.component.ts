import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
interface DefaultListHtml{
  symbolName:string,
  text:string;

}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  defaultPageList:DefaultListHtml[]=[
    {symbolName:'home',text:'Home'},
    {symbolName:'explore',text:'Explore'},
    {symbolName:'subscriptions',text:'Subscribtions'},
  ]

  
  userSpecificList:DefaultListHtml[]=[
    {symbolName:'video_library',text:'Library'},
    {symbolName:'history',text:'History'},
    {symbolName:'slideshow',text:'Your vidoes'},
    {symbolName:'watch later',text:'Watch later'}
  ]
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  clicktonavigate(selectedItem:any){
    if(selectedItem=="slideshow") this.route.navigate([selectedItem]);

    if(selectedItem=="history") this.route.navigate([selectedItem]);
    
  }
}
