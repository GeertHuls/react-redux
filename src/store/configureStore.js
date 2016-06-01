import {createStore} from 'redux';
import rootReducer from '../reducers';


//initialState arg is important especially at server side rendering
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState
  );
}
