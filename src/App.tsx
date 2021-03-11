import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Holder from './Pages/Holder';
import Music from './Pages/Music';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/directions">
          
        </Route>
        <Route path="/rsvp">
          
        </Route>
        <Route path="/music">
            <Music/>
          </Route>
        <Route path="/">
          <Holder/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
