import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Set inital state as an empty array by default.
// If an initial state is provided with the configureStore function
// then then that state will get passed here.
// Use inital state with server side rendered apps.
export default function CourseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    //Immutability is amognst others important for time travel debugging.
    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
