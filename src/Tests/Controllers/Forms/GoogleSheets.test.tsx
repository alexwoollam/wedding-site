import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import GoogleSheets from '../../../Controllers/Forms/GoogleSheets';

test('expect google sheets function to return false with incompleate information', () => {
    const data = { Name: '', Email: '' }
    const test = GoogleSheets( data );
    expect(test).toBe( false );
});
