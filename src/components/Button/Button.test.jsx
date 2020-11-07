import { render } from 'enzyme';
import React from 'react';
import Button from './Button';

describe('Button tests', () => {
    test('snapshot test', () => {
        const component = render(<Button />);

        expect(component).toMatchSnapshot();
    });
});
