import { Component, OnInit } from '@angular/core';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { Store } from '@ngrx/store';
import * as clickActions  from 'src/app/actions/click-counter.actions';
import { ClickState } from 'src/app/app.state';

@Component({
  selector: 'app-ng-rx-example',
  templateUrl: './ng-rx-example.component.html',
  styleUrls: ['./ng-rx-example.component.css']
})
export class NgRxExampleComponent implements OnInit {

  faGithub = faGithubSquare;

  clickCounter$ = this.store.select(state => state.click.clickCounter);
  counterMessage$ = this.store.select(state => state.click.counterMessage)

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
  getRandomClickCounter(){
    this.store.dispatch(clickActions.getRandomNumber())
  }
  getMessageOfNumber(num: number){
    this.store.dispatch(clickActions.getFactOfNumber({payload:{num}}))
  }
}
