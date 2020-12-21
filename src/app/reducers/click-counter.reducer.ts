import {ActionReducerMap, createReducer, on} from '@ngrx/store';
import * as clickCounterActions from '../actions/click-counter.actions';
import {set, update, flow} from 'lodash/fp';
import { AppState, ClickState, initialClickState } from '../app.state';
import { ClickCounterEffects } from '../effects/click-counter.effects';

const _clickCounterReducer = createReducer(
  initialClickState,
  on( clickCounterActions.incrementClickCount,
    (state: ClickState) =>
     update('clickCounter', (i:number) => i + 1, state)),
  on( clickCounterActions.resetClickCount,
    (state: ClickState) =>
    flow(
     set('clickCounter', initialClickState.clickCounter),
     set('counterMessage', initialClickState.counterMessage)
    )(state)
  ),
  on( clickCounterActions.getRandomNumberSuccess,
    (state: ClickState, props) =>
    flow(
      set('clickCounter', props.payload.randomNumber),
      set('counterMessage', props.payload.randomFact),
    )(state)
  ),
  on( clickCounterActions.getFactOfNumberSuccess,
    (state: ClickState, props) =>
      set('counterMessage', props.payload.randomFact, state)
    )
)
export function clickCounterReducer(state, action) {
  return _clickCounterReducer(state, action);
}

export const reducers: ActionReducerMap<AppState> = {
  click: clickCounterReducer
};
