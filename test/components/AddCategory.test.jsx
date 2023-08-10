/* eslint-disable no-undef */

import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory";


describe('<AddCategory /> test', () => {

    test('should change the input value', () => {

        render(<AddCategory onNewCategory={ ()=> {} } />);
        const input = screen.getByPlaceholderText('Buscar gifs');
        
        fireEvent.change(input, { target: { value: 'Hola Mundo' } });
        
        expect(input.value).toBe('Hola Mundo');

    })

    test('should call onNewCategory if the input have a value', () => {

        const inputValue = 'Independiente';
        const onNewCategory = jest.fn();

        render (<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByPlaceholderText('Buscar gifs');
        const form = screen.getByLabelText('form');

        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        // screen.debug();

    })

    test('should not call onNewCategory if the input is empty', () => {
        const onNewCategory = jest.fn();

        render (<AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByLabelText('form');
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
    });

})