import React, {lazy, Suspense} from "react";
import {
    BrowserRouter as Router,
    useRoutes,
  } from "react-router-dom";

import HomePage from "../../Pages/HomePage";
const LoginPage = lazy(() => import('../../Pages/LoginPage'));
const CharacterPage = lazy(() => import("../../Pages/CharacterPage"))

const Element = () => {
    let element = useRoutes([
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      { 
        path: ":id", 
        element: <CharacterPage /> 
      }, 
    ]);
  
    return element;
  }

const Wrapper = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
         <Router>
          <Element/>
        </Router>
      </Suspense>
       
    );
}

export default Wrapper;