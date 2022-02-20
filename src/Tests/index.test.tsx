import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import App from '../App';
import {Provider} from "react-redux";
import {store} from "../store";
import Protect from 'react-app-protect'

jest.mock("react-dom", () => ({ render: jest.fn() }));

const PASSWORD: string = process.env.REACT_APP_PASSWORD!;

const ProtectedStyle = {
}

it('renders without crashing', () => {
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
