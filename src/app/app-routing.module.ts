import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { NgRxExampleComponent } from './containers/ng-rx-example/ng-rx-example.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';


const routes: Routes = [
  { path:'home', component: HomePageComponent},
  { path:'ngRx', component: NgRxExampleComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
