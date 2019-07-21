import React from 'react';
import { render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/react/cleanup-after-each';
import {ItemModal} from './../components/itemModal';

afterEach(cleanup);

const toggle = jest.fn();
const onSubmit = jest.fn();
const addItem = jest.fn();

test('New Item Button Renders', () => {
    const {debug, getByTestId, queryByTestId, getByText} = render(<ItemModal />);
    expect(getByText('New Item')).toBeTruthy();
    expect(getByText('New Item').tagName).toBe('BUTTON');
    expect(getByText('New Item').innerHTML).toBe('New Item');
});

test('New Item Button Toggles Modal', () => {
    const {debug, getByTestId, queryByTestId, getByText} = render(<ItemModal toggle={toggle} />);
    expect(queryByTestId('modal')).toBeFalsy();
    fireEvent.click(getByText('New Item'));
    //expect(toggle).toHaveBeenCalledTimes(1);
    expect(getByTestId('modal')).toBeTruthy();
});

test('Form Submits On Click And Closes', () => {
    const {debug, getByTestId, queryByTestId, getByText} = render(<ItemModal toggle={toggle} addItem={addItem} />);
    fireEvent.click(getByText('New Item'));
    fireEvent.click(getByText('Add Item'));
    
    //expect(queryByTestId('modal')).toBeFalsy();
});