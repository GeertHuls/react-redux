// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}

//Prop type validations:
//The 'children' prop is required, ensure it exists since it is passed in by react-router.
App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

//Connect the redux store to the top level app component and pass
//the loading status down to the header.

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
