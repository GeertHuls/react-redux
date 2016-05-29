// This component handles the App template used on every page.
import React, {PropTypes} from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header here...</p>
        {this.props.children} //Children are passed in through react-router
      </div>
    );
  }
}

//Prop type validations:
//The 'children' prop is required, ensure it exists since it is passed in by react-router.
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
