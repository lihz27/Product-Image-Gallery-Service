import { shallow, mount, render } from 'enzyme';
import React from 'react';
import App from '../App.js';

describe('App', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('it should exist', () => {
    expect(wrapper.exists()).toBe(true);
  })
});