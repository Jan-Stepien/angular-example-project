export interface ClickState {
  clickCounter: number
}
export interface AppState {
 click: ClickState
}
export const initialClickState = {
  clickCounter: 0
}

