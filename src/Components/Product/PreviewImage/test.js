import React from 'react';
import ReactDOM from 'react-dom';
import PreviewImage from './PreviewImage';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PreviewImage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

