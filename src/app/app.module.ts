import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialmodule } from './angular-materail.module';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionComponent } from './section/section.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PostsComponent } from './section/posts/posts.component';
import { FirebaseInterceptor } from './shared/firebase.interceptor';
import { searchRoutingModule } from './search/search-routing.module';
import { SearchModule } from './search/search.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';



@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    SidenavComponent,
    HeaderComponent,
    LoginComponent,
    PostsComponent,
    HomeComponent,
    TemplatedrivenformComponent  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularMaterialmodule,
    HttpClientModule,
    SearchModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:FirebaseInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
