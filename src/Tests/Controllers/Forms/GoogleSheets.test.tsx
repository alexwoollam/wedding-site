import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import GoogleSheets from '../../../Controllers/Forms/GoogleSheets';

describe('GoogleSheets controller', () => {
    
    test('expect google sheets function to early return false with incompleate information', () => {
        const data = { Name: '', Email: '' }
        const test = GoogleSheets( data, '1234', '1234' );
        expect(test).toBe( false );
    });

    test('expect google sheets function to return true with compleate information', () => {
        const data = { Name: 'Alex Test', Email: 'test@test.com' }
        const test = GoogleSheets( data, '1234', '1234' );
        expect(test).toBe( true );
    });

});