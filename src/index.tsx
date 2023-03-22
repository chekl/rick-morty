import React from 'react';
import ReactDOM from 'react-dom/client';

import Wrapper from './components/Wrapper/Wrapper';

import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element | DocumentFragment
);
root.render(
  <GoogleOAuthProvider clientId='169414532568-umumk09am51487bg19cuo0pacphrj8bt.apps.googleusercontent.com'>
    <Wrapper />
  </GoogleOAuthProvider>
);
