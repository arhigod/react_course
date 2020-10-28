import { render } from 'enzyme';
import React from 'react';
import Logo from './Logo';

describe('Logo tests', () => {
    test('snapshot test', () => {
        const component = render(<Logo />);

        expect(component).toMatchSnapshot();
    });
});
