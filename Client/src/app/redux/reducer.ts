import { Action } from './action';
import { ActionType } from './action-types';
import { AppState } from './app-state';

export function reducer(oldAppState: AppState, action: Action): AppState {
  const newAppState = { ...oldAppState };

  switch (action.type) {
    case ActionType.userLogin:
      newAppState.user = action.payload;
      break;

    case ActionType.userLogout:
      newAppState.user = action.payload;
      break;
  }

  return newAppState;
}
