import React from 'react';
import { shallow  } from 'enzyme';

import App from './App';

const emptyProps ={
  text: 'test'
};

describe('App', () => {
  describe('App-title', () => {
    const cases = [
      ['simple test1', { text: 'Jest'}, 'Welecome to Jest'],
      ['simple test2', { text: 'enzyme'}, 'welcome to enzyme']
    ];
    describe.each(cases)('change Props', (title, override, expected) => {
       it(title, () => {
         const customProps = Object.assign({}, emptyProps, override);
         const wrapper = shallow(<App {...customProps} />);
         expect(wrapper.instance().props.text).toBe(customProps.text);
         expect(wrapper.find('.App-title').text()).toBe(expected);
       });
    });
  });
});
