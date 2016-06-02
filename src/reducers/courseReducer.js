import * as types from '../actions/actionTypes';

// Set inital state as an empty array by default.
// If an initial state is provided with the configureStore function
// then then that state will get passed here.
// Use inital state with server side rendered apps.
export default function CourseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      //Create new array (using spread operator) and add a new value.
      return[...state,
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
