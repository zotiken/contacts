import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.scss";

import Contacts from "./Pages/Contacts/Contacts";
import SignIn from "./Pages/SignIn/SignIn";
function App() {
  const [isAuth, setisAuth] = useState(false);
  const [loading, setisloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisloading(false);
    }, 5000);
  }, []);

  function onLogIn() {
    setisAuth(true);
  }

  return (
    <>
      <Router>
          <h1 className="visually-hidden">Auth and Contacts</h1>
          {loading ? (
            <div className="preload"></div>
          ) : (
            <Switch>
              <Route path="/contacts">
                {isAuth ? (
                  <Contacts isAuth={isAuth} />
                ) : (
                  <SignIn isAuth={isAuth} onLogIn={onLogIn} />
                )}
              </Route>
              <Route path="/signIn">
                <SignIn isAuth={isAuth} onLogIn={onLogIn} />
              </Route>
              <Route exact path="/">
                {isAuth ? (
                  <Contacts isAuth={isAuth} />
                ) : (
                  <SignIn isAuth={isAuth} onLogIn={onLogIn} />
                )}
              </Route>
            </Switch>
          )}
        <footer></footer>
      </Router>
    </>
  );
}

export default App;
