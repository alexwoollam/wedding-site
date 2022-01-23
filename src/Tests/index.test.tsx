import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import App from '../App';
import {Provider} from "react-redux";
import {store} from "../store";

jest.mock("react-dom", () => ({ render: jest.fn() }));

it('renders without crashing', () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("../index.tsx");
    expect(ReactDOM.render).toHaveBeenCalledWith(
    <React.StrictMode>
        <Provider store={ store }>
            <App />
        </Provider>
    </React.StrictMode>, div);
});
