import React from 'react';

//You could use a stateless functional component but at the time of
//writing there is a problem with hot-reloading pages of stateless functional components.
//The component needs the parent to be a classe in order for the hot-reloading to work.
class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
      </div>
    );
  }
}

export default AboutPage;
