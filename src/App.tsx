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
import {Thanks} from './Pages/Thanks';
import {NotThanks} from './Pages/NotThanks';
import {Gifts} from './Pages/Gifts';
import {Accommodation} from './Pages/Accommodation';
import {Information} from './Pages/Information';
import {WeddingParty} from './Pages/WeddingParty';
import {Contact} from './Pages/Contact';
import {Container} from 'reactstrap';
import FooterImage from './Components/Media/FooterImage';
import ScrollToTop from "./Helpers/ScrollToTop";

function App() {

  const devmode: string | undefined = process.env.REACT_APP_DEV_MODE;

  let home: any = null;
  let music: any = null;
  let rsvp: any = null;
  let accommodation: any = null;
  let giftlist: any = null;
  let information: any = null;
  let thanks: any = null;
  let oh: any = null;
  let weddingParty: any = null;
  let contact: any = null;

  /**
   * CI/CD: remove item from devmode to push to live site.
   */
  if ( devmode === 'true' ) {
    weddingParty = <Route path="/wedding-party"><Container><WeddingParty/></Container></Route>;
  }

  home = <Route path="/"><Container><Home/></Container></Route>;
  rsvp = <Route path="/rsvp"><Container><RSVP/></Container></Route>;
  accommodation = <Route path="/accommodation"><Container><Accommodation/></Container></Route>;
  giftlist = <Route path="/gift-list"><Container><Gifts/></Container></Route>
  information = <Route path="/information"><Container><Information/></Container></Route>;
  thanks = <Route path="/thanks"><Container><Thanks/></Container></Route>;
  oh = <Route path="/oh"><Container><NotThanks/></Container></Route>;
  music = <Route path="/music"><Container><Music/></Container></Route>;
  contact = <Route path="/contact"><Container><Contact/></Container></Route>;

  return (
    <Router>
      <Menu devmode={devmode} />
      <ScrollToTop />
      <Switch>
        {rsvp}
        {accommodation}
        {information}
        {giftlist}
        {weddingParty}
        {music}
        {thanks}
        {oh}
        {contact}
        {home}
      </Switch>
      <FooterImage/>
    </Router>
  );
}

export default App;
