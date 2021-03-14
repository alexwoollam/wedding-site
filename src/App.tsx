import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Holder from './Pages/Holder';
import Music from './Pages/Music';


function App() {

  const devmode = process.env.REACT_APP_DEV_MODE;

  let directions: any = null;
  let music: any = null;
  let rsvp: any = null;

  /**
   * CI/CD: remove item from devmode to push to live site.
   */
  if ( devmode === 'true' ) {
    directions = <Route path="/directions"><h1>directions</h1></Route>;
    music = <Route path="/music"><Music/></Route>;
    rsvp = <Route path="/rsvp"><h1>rsvp</h1></Route>;
  }

  return (
    <Router>
      <Switch>
        {directions}      
        {music}
        {rsvp}
        <Route path="/" component={Holder} />
      </Switch>
    </Router>
  );
}

export default App;
