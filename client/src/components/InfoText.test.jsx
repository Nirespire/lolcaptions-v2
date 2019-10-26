import React from 'react';
import ReactDOM from 'react-dom';
import InfoText from './InfoText';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InfoText />, div);
  ReactDOM.unmountComponentAtNode(div);
});
