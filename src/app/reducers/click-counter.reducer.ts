import {ActionReducerMap, createReducer, on} from '@ngrx/store';
import * as clickCounterActions from '../actions/click-counter.actions';
import {set, update} from 'lodash/fp';
import { AppState, ClickState, initialClickState } from '../app.state';

const _clickCounterReducer = createReducer(
  initialClickState,
  on( clickCounterActions.incrementClickCount,
    (state: ClickState) =>
     update('clickCounter', (i:number) => i + 1, state)),
  on( clickCounterActions.resetClickCount,
    (state: ClickState) =>
     set('clickCounter', 0, state)
  )
)
export function clickCounterReducer(state, action) {
  return _clickCounterReducer(state, action);
}

export const reducers: ActionReducerMap<AppState> = {
  click: clickCounterReducer
};
