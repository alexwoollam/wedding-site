import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import App from '../App';
import {store} from "../store";
import Protect from 'react-app-protect'
import {Provider} from "react-redux";

jest.mock("react-dom", () => ({ render: jest.fn() }));

const PASSWORD:string = '84c2f335a3e3935a29dbc29689a9fd49252f2e25eed354672b37790f94b149578266c934389109e2dc9041e0f77a0ee9beb296205622e0a851c5a1472d1b32fd';
const ProtectedStyle = {
}

it('App renders without crashing', () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("../index.tsx");
    expect(ReactDOM.render).toHaveBeenCalledWith(
        <React.StrictMode>
            <Protect styles={{ProtectedStyle}} boxTitle="Please use the password printed on your invite" blur={true} sha512={PASSWORD}>
                <Provider store={ store }>
                    <App />
                </Provider>
            </Protect>
        </React.StrictMode>, div);
});