import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import Wrapper from './components/Wrapper/Wrapper';

import { store } from './store/store';

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root') as Element | DocumentFragment);
root.render(
  <Provider store={store}>
    <Wrapper />
  </Provider>    

);
