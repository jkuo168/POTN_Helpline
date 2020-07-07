import React from "react";
import HomePage from "./components/home_page/HomePage";
import HomeworkHelpline from "./components/homework_helpline/HomeworkHelpline";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
