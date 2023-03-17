import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import Wrapper from './components/Wrapper/Wrapper';

import { GoogleOAuthProvider } from '@react-oauth/google';

import { store } from './store/store';



const root = ReactDOM.createRoot(document.getElementById('root') as Element | DocumentFragment);
root.render(
  <GoogleOAuthProvider clientId='169414532568-umumk09am51487bg19cuo0pacphrj8bt.apps.googleusercontent.com'>
   <Provider store={store}>
    <Wrapper />
  </Provider>      
  </GoogleOAuthProvider>
 

);
