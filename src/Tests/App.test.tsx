import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import App from '../App';

jest.mock("react-dom", () => ({ render: jest.fn() }));

it('App renders without crashing', () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("../index.tsx");
    expect(ReactDOM.render).toHaveBeenCalledWith(
    <React.StrictMode>
        <App />
    </React.StrictMode>, div);
});