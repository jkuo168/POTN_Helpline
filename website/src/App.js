import React from "react";
// Pages
import HomePage from "./components/home_page/HomePage";
import UserHome from "./components/user_home/UserHome";
import Login from "./components/login/Login";
import SignUp from "./components/sign_up/SignUp";
import { AuthProvider } from "./components/authentication/Auth";
import PrivateRoute from "./components/routes/PrivateRoute";

import HomeworkHelpline from "./components/homework_helpline/HomeworkHelpline";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/user_home" component={UserHome} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
