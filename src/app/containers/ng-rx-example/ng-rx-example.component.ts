import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as clickActions  from 'src/app/actions/click-counter.actions';
import { ClickState } from 'src/app/app.state';

@Component({
  selector: 'app-ng-rx-example',
  templateUrl: './ng-rx-example.component.html',
  styleUrls: ['./ng-rx-example.component.css']
})
export class NgRxExampleComponent implements OnInit {

  clickCounter$ = this.store.select(state => state.click.clickCounter);

  constructor(private store: Store<{click: ClickState}>,
    ) { }

  ngOnInit(): void {
  }
  incrementClickCounter(){
    this.store.dispatch(clickActions.incrementClickCount());
  }
  resetClickCounter(){
    this.store.dispatch(clickActions.resetClickCount());
  }

}
