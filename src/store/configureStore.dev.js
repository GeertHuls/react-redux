import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

//initialState arg is important especially at server side rendering
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk,
      /*This middleware will be only necessary in development
      to notify occurences when state is changed. */
      reduxImmutableStateInvariant() /*, add more middleware */)
  );
}
