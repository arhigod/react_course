import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ModalMovieDetail from './ModalMovieDetail';

const waitForComponentToPaint = async (wrapper) => {
    await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 0));
        wrapper.update();
    });
};

describe('ModalMovieDetail tests', () => {
    test('First view test', async () => {
        const form = mount(
            <ModalMovieDetail />
        );

        let items = form.find('.field');
        expect(items).toHaveLength(7);
    });

    test('Submit test', async () => {
        const form = mount(
            <ModalMovieDetail />
        );
        
        let errors = form.findWhere(n => n.html() === 'Required field');
        expect(errors).toHaveLength(0);

        form.find('.button.default').simulate('click');
        await waitForComponentToPaint(form);

        errors = form.findWhere(n => n.html() === 'Required field');
        expect(errors).toHaveLength(7);
    });
});
