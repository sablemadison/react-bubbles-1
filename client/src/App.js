import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//components
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
//stylesheet
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubble-page" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
