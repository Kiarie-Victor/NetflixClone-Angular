import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { ErrorComponent } from './pages/error/error.component';
import { CanDeactivateService, canDeactivateTeam } from './service/candeactivate.service';
import { DemoComponent } from './pages/demo/demo.component';
import { PostResolveService, canResolveGuard } from './service/postresolve.service';
import { FormsComponent } from './pages/forms/forms.component';
import { ReactformComponent } from './pages/reactform/reactform.component';
const ROUTES: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'demo', component:DemoComponent, resolve:{posts:canResolveGuard}},
  {path:'search',component:SearchComponent, canDeactivate:[canDeactivateTeam]},
  {path:'movie/:id', component:MovieDetailsComponent},
  {path:'forms', component:FormsComponent},
  {path:'reactform', component:ReactformComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
