import React from "react";
// Pages
import HomePage from "./components/home_page/HomePage";
import UserHome from "./components/user_home/UserHome";
import Login from "./components/authentication/login/Login";
import SignUp from "./components/authentication/sign_up/SignUp";
import { AuthProvider } from "./components/authentication/Auth";
import PrivateRoute from "./components/authentication/routes/PrivateRoute";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/homework_helpline" component={UserHome} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
