import { NgModule } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { SearchComponent } from "./pages/search/search.component";
import { MovieDetailsComponent } from "./pages/movie-details/movie-details.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { MovieApiServiceService } from "./service/movie-api-service.service";
import { AppComponent } from "./app.component";
import { CourseGuardService } from "./service/course-guard.service";
import { CanDeactivateService } from "./service/candeactivate.service";
import { HighlightDirective } from "./directives/highlight.directive";
import { PostCardService } from "./service/postcard.service";
import { DemoComponent } from "./pages/demo/demo.component";
import { PostResolveService } from "./service/postresolve.service";
import { FormsComponent } from './pages/forms/forms.component';
import { ReactformComponent } from './pages/reactform/reactform.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    AppComponent,
    DemoComponent,
    HighlightDirective,
    FormsComponent,
    ReactformComponent
  ],
  imports:[
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers:[MovieApiServiceService,CourseGuardService,CanDeactivateService, PostCardService,PostResolveService],
  bootstrap:[AppComponent]
})
export class AppModule{}