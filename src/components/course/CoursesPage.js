import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
		constructor(props, context) {
			super(props, context);

			this.state = {
				course: { title: "" }
			};

			this.onTitleChange = this.onTitleChange.bind(this);
			this.onClickSave = this.onClickSave.bind(this);
		}

		onTitleChange(event) {
			const course = this.state.course;
			course.title = event.target.value;
			this.setState({course: course});
		}

		onClickSave() {
			//With dispatch you can fire off action, delcared in the actions class.
			//The dispatch prop is injected by the connect function below.
			this.props.actions.createCourse(this.state.course);
		}

		courseRow(course, index) {
			return <div key={index}>{course.title}</div>;
		}

		render() {
			return (
				<div>
					<h1>courses</h1>
					{this.props.courses.map(this.courseRow)}
					<h2>Add course</h2>
					<input
						type="text"
						onChange={this.onTitleChange}
						value={this.state.course.title} />

						<input
							type="submit"
							value="Save"
							onClick={this.onClickSave}/>
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
