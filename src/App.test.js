import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

it('renders without crashing', () => {
  const div = document.createElement('div');
  root.render(<App />, div);
  root.unmountComponentAtNode(div);
});
