import { createAction, props } from '@ngrx/store';

export const incrementClickCount = createAction('[Click Count] Increment');
export const resetClickCount = createAction('[Click Count] Reset');

export const getRandomNumber = createAction('[Click Count] Get Random');
export const getRandomNumberSuccess = createAction('[Click Count] Get Random Success', props<{payload:{ randomNumber: number, randomFact: string }}>());

export const getFactOfNumber = createAction('[Click Count] Get Fact of Number', props<{payload: {num: number}}>());
export const getFactOfNumberSuccess = createAction('[Click Count] Get Fact Success', props<{payload:{ randomFact: string }}>());
