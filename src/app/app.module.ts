import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { clickCounterReducer, reducers } from './reducers/click-counter.reducer';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { CounterComponent } from './components/counter/counter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TileComponent } from './components/tile/tile.component';
import { NgRxExampleComponent } from './containers/ng-rx-example/ng-rx-example.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularMainPageComponent } from './containers/angular-main-page/angular-main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CounterComponent,
    TileComponent,
    NgRxExampleComponent,
    PageNotFoundComponent,
    FooterComponent,
    AngularMainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({click: reducers.click}),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
