import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadAuthorsSuccess(courses) {
  return { type: types.LOAD_AUTHORS_SUCCESS, courses };
}

export function loadAuthors() {
  return function (dispatch) {
    return courseApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
