import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { incrementClickCount, resetClickCount } from 'src/app/actions/click-counter.actions';
import { AppState, ClickState } from 'src/app/app.state';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  clickCounter$ = this.store.select(state => state.click.clickCounter);


  constructor(private store: Store<{click: ClickState}>) {

  }
  ngOnInit(): void {

  }
  incrementClickCounter(){
    this.store.dispatch(incrementClickCount());
  }
  resetClickCounter(){
    this.store.dispatch(resetClickCount());
  }
}
