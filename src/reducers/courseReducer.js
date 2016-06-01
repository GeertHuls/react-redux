export default function CourseReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      //Create new array (using spread operator) and add a new value.
      return[...state,
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
