import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import ManageCoursePage from './ManageCoursePage';

describe ('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    //We need to test the component with its inner child components,
    //hence we use mount in stead of shallow.
    //A full virtual dom is created with mount (using jsdom library).
    const wrapper = mount(<ManageCoursePage/>);

  });
});
