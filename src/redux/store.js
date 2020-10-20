import { saveAuthUserReducer } from './reducers/authUserReducer';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();
export const store = createStore(
  saveAuthUserReducer,
  persistedState,
  composeWithDevTools(),
);

store.subscribe(function () {
  saveState(store.getState());
});
