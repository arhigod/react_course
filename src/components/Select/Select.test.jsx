import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Select from './Select';

const waitForComponentToPaint = async (wrapper) => {
    await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 0));
        wrapper.update();
    });
};

describe('Select tests', () => {
    test('Display test', async () => {
        const select = mount(
            <Select items={['a', 'b', 'c']} />
        );

        select.simulate('click');
        await waitForComponentToPaint(select);

        let items = select.find('li');
        expect(items).toHaveLength(3);
    });

    test('Change test singleselect', async () => {
        let onChange = jest.fn();
        const select = mount(
            <Select items={['a', 'b', 'c']} onChange={onChange} />
        );

        select.simulate('click');
        await waitForComponentToPaint(select);

        let items = select.find('li');
        items.at(0).simulate('click');
        items.at(2).simulate('click');

        expect(onChange).toHaveBeenNthCalledWith(1, ['a']);
        expect(onChange).toHaveBeenNthCalledWith(2, ['c']);
    });

    test('Change test multiselect', async () => {
        let onChange = jest.fn();
        const select = mount(
            <Select items={['a', 'b', 'c']} multiselect onChange={onChange} />
        );

        select.simulate('click');
        await waitForComponentToPaint(select);

        let items = select.find('li');
        items.at(0).simulate('click');
        items.at(2).simulate('click');

        expect(onChange).toHaveBeenNthCalledWith(1, ['a']);
        expect(onChange).toHaveBeenNthCalledWith(2, ['c']);
    });
});
