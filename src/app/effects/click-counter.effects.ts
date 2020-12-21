import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as clickActions from "../actions/click-counter.actions";
import { map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { NgRxDataService } from "../containers/ng-rx-example/ng-rx-data.service";
import { Store } from "@ngrx/store";
import { ClickState } from "../app.state";

@Injectable()
export class ClickCounterEffects {

  requestRandomNumber$ = createEffect( () =>
    this.actions$.pipe(
      ofType(clickActions.getRandomNumber),
      mergeMap( () => this.rxDataService.getRandomNumberFact()
      .pipe(
        map( (randomFact) =>{
          return ({ type: clickActions.getRandomNumberSuccess.type, payload: {
            randomNumber: Number(randomFact.substr(0,randomFact.indexOf(' '))),
            randomFact: randomFact.substr(randomFact.indexOf(' ') + 1),
            }
          });
        })
      )
    )
  ));

  afterChangeRequestFact$ = createEffect( () =>
        this.actions$.pipe(
          ofType( clickActions.incrementClickCount),
          withLatestFrom(
            this.store.select( state => state.click.clickCounter)
          ),
          mergeMap( ([action, number]) => this.rxDataService.getRandomNumberFact(number).pipe(
            map( (fact) => {
              return ({ type: clickActions.getFactOfNumberSuccess.type,
                payload: {
                  randomFact: fact.substr(fact.indexOf(' ') + 1)
              }})
            })
          )
          )));

  constructor(private actions$: Actions,
              private rxDataService: NgRxDataService,
              private store: Store<{click: ClickState}>) {

  }
}
