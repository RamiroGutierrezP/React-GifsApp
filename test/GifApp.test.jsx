/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react"
import { GifApp } from "../src/GifApp";


describe('<GifApp />', () => {

    test('should show the title ', () => {
        render(<GifApp />);
        expect(screen.getByText('Gif-App'));

    })
    test('should show a list of categories', () => {
        render(<GifApp />);
        expect(screen.getByText('Stephen Curry'));
    })

})