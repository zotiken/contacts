import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom'

import "./App.scss";

import Contacts from "./Pages/Contacts/Contacts";
import SignIn from "./Pages/SignIn/SignIn"; 
function App() {
  const [isAuth, setisAuth] = useState(false);
  const [loading, setisloading] = useState(true);

  useEffect(()=>{
setTimeout(() => {
  setisloading(false)
}, 5000);
  },[])

  function onLogIn() {
    setisAuth(true)
  }

  return (
    <>
      <header></header>
      <main>
        <h1 className="visually-hidden">Auth and Contacts</h1>
        <h1 >Auth and Contacts</h1>
        {loading ?
      <div>Loading...</div>  
      :
      <Router>
        <Route path='/contacts'>
          {isAuth ?
        <Contacts isAuth={isAuth}/>
:
<SignIn isAuth={isAuth} onLogIn={onLogIn}/>
          }
        </Route>
        <Route path='/signIn'>
        <SignIn isAuth={isAuth} onLogIn={onLogIn}/>
        </Route>
        <Route exact path='/' />
      </Router>
      }
      </main>
      <footer></footer>
      </>
  );
}

export default App;
