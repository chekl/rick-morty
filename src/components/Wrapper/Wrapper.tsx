import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import LogoBar from '../LoginBar/LogoBar';

import HomePage from '../../Pages/HomePage/HomePage';
const CharacterPage = lazy(
  () => import('../../Pages/CharacterPage/CharacterPage')
);

const Element = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: ':id',
      element: <CharacterPage />,
    },
  ]);

  return element;
};

const Wrapper = () => {
  return (
    <Suspense>
      <Router>
        <LogoBar />
        <Element />
      </Router>
    </Suspense>
  );
};

export default Wrapper;
