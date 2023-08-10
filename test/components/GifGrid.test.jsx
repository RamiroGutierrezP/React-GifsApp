/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//Como el useFetchGifs es un custom hook, tenemos que mockearlo
jest.mock('../../src/hooks/useFetchGifs');


describe('<GifGrid /> test ', () => { 

    const category = 'Independiente';

    test('should show loading initialy', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render (<GifGrid category={ category } />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText( category ));
    })
    test('should show items when the images are available', () => {

        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/infiernorojo/bochini.jpg',
                title: 'Independiente'
            },
            {
                id: 'CAI',
                url: 'https://localhost/infiernorojo/bochini.jpg',
                title: 'InfiernoRojo'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render (<GifGrid category={ category } />);

        expect(screen.getAllByRole( 'img' ).length).toBe( gifs.length );
        
        // screen.debug();
    })
})