import React from 'react';
import HomePage from './home_page/components/HomePage';
import HomeworkHelpline from './homework_helpline/components/HomeworkHelpline';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
