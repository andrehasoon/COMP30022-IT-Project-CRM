import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SignIn from "./components/signin.component";
import SignUp from "./components/signup.component";


function App() {
  return (<Router>
    <Switch>
      <div className="auth-wrapper">
       <div className="auth-inner">
          <Route exact path='/' component={SignIn} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
         
        </div>
      </div>

      {/* navigation bar/ team ion logo */}
      {/* <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>ION</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>  */}
    </Switch>
  </Router>
  );
}

export default App;