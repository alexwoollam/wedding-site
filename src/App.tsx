import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Holder from './Pages/Holder';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/directions">
          
        </Route>
        <Route path="/rsvp">
          
        </Route>
        <Route path="/">
          <Holder/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
