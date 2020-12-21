export interface ClickState {
  clickCounter: number,
  counterMessage: string
}
export interface AppState {
 click: ClickState
}
export const initialClickState = {
  clickCounter: 0,
  counterMessage: 'No message'
}

