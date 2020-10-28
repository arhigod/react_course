import { render } from 'enzyme';
import React from 'react';
import Footer from './Footer';

describe('Footer tests', () => {
    test('snapshot test', () => {
        const component = render(<Footer />);

        expect(component).toMatchSnapshot();
    });
});
