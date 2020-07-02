import React from "react";
import HomePage from "./components/home_page/HomePage";
import HomeworkHelpline from "./components/homework_helpline/HomeworkHelpline";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
