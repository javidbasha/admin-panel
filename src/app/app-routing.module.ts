import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchresultsComponent } from './search/searchresults/searchresults.component';
import { SearchvideosComponent } from './search/searchvideos/searchvideos.component';
import { PostsComponent } from './section/posts/posts.component';
import { SectionComponent } from './section/section.component';
import { AuthGuard } from './shared/auth.guard';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'posts/:id',canActivate:[AuthGuard],component:PostsComponent},
    {path:'search',component:SearchresultsComponent },
    {path:'slideshow',component:TemplatedrivenformComponent},
    {path:'history',component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
