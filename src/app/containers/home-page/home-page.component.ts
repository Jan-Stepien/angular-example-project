import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementClickCount, resetClickCount } from 'src/app/actions/click-counter.actions';
import { ClickState } from 'src/app/app.state';
import { tileStyles } from 'src/app/components/tile/tile.config';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  clickCounter$ = this.store.select(state => state.click.clickCounter);

  tileStyles = tileStyles;
  tiles = [
    'NgRx implementation',
    'GitHub',
    'Boostrap used',
    'Responsive design',
];

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
  tileClicked(item: number){
    console.log(item);
  }
}
