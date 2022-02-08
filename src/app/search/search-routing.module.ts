import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchresultsComponent } from "./searchresults/searchresults.component";
import { SearchvideosComponent } from "./searchvideos/searchvideos.component";

const route:Routes=[
    {path:'',component:SearchresultsComponent}
]
@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})
export class searchRoutingModule{}