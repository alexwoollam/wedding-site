import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import App from '../App';

jest.mock("react-dom", () => ({ render: jest.fn() }));

it('renders without crashing', () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("../index.tsx");
    expect(ReactDOM.render).toHaveBeenCalledWith(
    <React.StrictMode>
        <App />
    </React.StrictMode>, div);
});