import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store';
import { Provider } from 'react-redux'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Protect from 'react-app-protect'
import 'react-app-protect/dist/index.css'

const PASSWORD:string = process.env.REACT_APP_PASSWORD!;

const ProtectedStyle = {
}

ReactDOM.render(
  <React.StrictMode>
      <Protect styles={{ProtectedStyle}} boxTitle="Please use the password printed on your invite" blur={true} sha512={PASSWORD}>
          <Provider store={ store }>
              <App />
          </Provider>
      </Protect>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
