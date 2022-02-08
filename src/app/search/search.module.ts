import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchvideosComponent } from './searchvideos/searchvideos.component';
import { searchRoutingModule } from './search-routing.module';
import { AngularMaterialmodule } from '../angular-materail.module';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    SearchvideosComponent,
    SearchresultsComponent
  ],
  imports: [
    CommonModule,
    searchRoutingModule,
    AngularMaterialmodule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  exports:[
    SearchvideosComponent,
    SearchresultsComponent
  ]
})
export class SearchModule { }
