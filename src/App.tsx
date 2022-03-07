import React, { useEffect } from 'react';
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
import {Accommodation} from './Pages/Accommodation';
import {Information} from './Pages/Information';
import {Gifts} from './Pages/Gifts';
import {WeddingParty} from './Pages/WeddingParty';
import {Contact} from './Pages/Contact';
import {Container} from 'reactstrap';
import FooterImage from './Components/Media/FooterImage';
import {useHistory} from "react-router-dom";
import ScrollToTop from "./Helpers/ScrollToTop";

function App() {

  const devmode: string | undefined = process.env.REACT_APP_DEV_MODE;
  const history = useHistory();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const request = () => {
    let path = localStorage.getItem('path');
    if(path) {
      localStorage.removeItem('path');
      history.push(path);
    }
  }

  useEffect(() => {
    request();
  }, [request]);

  let home: any = null;
  let music: any = null;
  let rsvp: any = null;
  let accommodation: any = null;
  let information: any = null;
  let gifts: any = null;
  let thanks: any = null;
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
  information = <Route path="/information"><Container><Information/></Container></Route>;
  gifts = <Route path="/gifts"><Container><Gifts/></Container></Route>;
  thanks = <Route path="/thanks"><Container><Thanks/></Container></Route>;
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
        {gifts}
        {weddingParty}
        {music}
        {thanks}
        {contact}
        {home}
      </Switch>
      <FooterImage/>
    </Router>
  );
}

export default App;
