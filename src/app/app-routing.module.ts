import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularMainPageComponent } from './containers/angular-main-page/angular-main-page.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { NgRxExampleComponent } from './containers/ng-rx-example/ng-rx-example.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';


const routes: Routes = [
  { path:'home', component: HomePageComponent},
  { path:'angular', component: AngularMainPageComponent},
  { path:'angular/ngRx', component: NgRxExampleComponent},
  { path:'',   redirectTo: '/home', pathMatch: 'full' },
  { path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
