//This is a container component (smart component)
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
		constructor(props, context) {
			super(props, context);

			this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
		}

		courseRow(course, index) {
			return <div key={index}>{course.title}</div>;
		}

		redirectToAddCoursePage() {
			browserHistory.push('/course');
		}

		render() {
			//This is called destructuring.
			//The actual path is: this.props.courses.
			//But with destructuring you seperate the property in a seperate const.
			const {courses} = this.props;

			return (
				<div>
					<h1>courses</h1>
					<input type="submit"
									value="Add course"
									className="btn btn-primary"
									onClick={this.redirectToAddCoursePage}/>
					<CourseList courses={courses}/>
				</div>
		);
	}
}

//The state param is the state from the redux store.
//The state.courses prop in the return value is defined in the
//root reducer (index.js) file.

//The ownProps param are the props attached to this component.
//Might be useful for router related props.
function mapStateToProps(state, ownProps) {
	return {
		courses: state.courses
	};
}

CoursesPage.propTypes = {
  actions: React.PropTypes.object.isRequired,
	courses: React.PropTypes.array.isRequired
};

function mapDispatchToProps (dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

//mapDispatchToProps is used to define what actions
//are exposed in the component. If you don't provide a mapDispatchToProps
//param, connect will attach a dispatchprops automatically.
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
