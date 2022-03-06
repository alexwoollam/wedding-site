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

ReactDOM.render(
  <React.StrictMode>
      <Protect
          styles={{
              input: {
                  color: '#67805a',
                  minWidth: '280px',
                  width: '100%',
              },
              header: {
                  fontSize: '15px',
                  background: '#67805a',
              },
              button : {
                  border: '2px solid #67805a',
                  color: '#67805a',
                  backgroundColor: 'rgba(0,0,0,0)',
              }
          }}
          boxTitle="Please use the password printed on your invite"
          inputPlaceholder={'Password (All Caps!)'}
          blur={true}
          sha512={PASSWORD}
      >
          <Provider store={ store }>
              <App />
          </Provider>
      </Protect>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
