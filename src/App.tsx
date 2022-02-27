import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './Components/Menu';
import Music from './Pages/Music';
import {Home} from './Pages/Home';
import {RSVP} from './Pages/RSVP';
import {Accommodation} from './Pages/Accommodation';
import {Information} from './Pages/Information';
import {Gifts} from './Pages/Gifts';
import {WeddingParty} from './Pages/WeddingParty';
import {Contact} from './Pages/Contact';
import {Container} from 'reactstrap';

function App() {

  const devmode: string | undefined = process.env.REACT_APP_DEV_MODE;

  let home: any = null;
  let music: any = null;
  let rsvp: any = null;
  let accommodation: any = null;
  let information: any = null;
  let gifts: any = null;
  let weddingParty: any = null;
  let contact: any = null;

  /**
   * CI/CD: remove item from devmode to push to live site.
   */
  if ( devmode === 'true' ) {
    contact = <Route path="/contact"><Container><Contact/></Container></Route>;
    weddingParty = <Route path="/wedding-party"><Container><WeddingParty/></Container></Route>;
  }

  home = <Route path="/"><Container><Home/></Container></Route>;
  rsvp = <Route path="/rsvp"><Container><RSVP/></Container></Route>;
  accommodation = <Route path="/accommodation"><Container><Accommodation/></Container></Route>;
  information = <Route path="/information"><Container><Information/></Container></Route>;
  gifts = <Route path="/gifts"><Container><Gifts/></Container></Route>;
  music = <Route path="/music"><Container><Music/></Container></Route>;

  return (
    <Router>
      <Menu devmode={devmode} />
      <Switch>
        {rsvp}
        {accommodation}
        {information}
        {gifts}
        {weddingParty}
        {contact}
        {music}
        {home}
      </Switch>
    </Router>
  );
}

export default App;
