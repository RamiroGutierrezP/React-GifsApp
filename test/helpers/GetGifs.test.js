/* eslint-disable no-undef */

import { getGifs } from '../../src/helpers/GetGifs';

describe('GetGifs test', () => {  

    test('should return an array (of gifs)', async () => {
        const gifs = await getGifs('Lionel Messi');
        expect(gifs.length).toBeGreaterThan(0);
        // console.log(gifs);
        expect( gifs[0]).toEqual(
            {
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String)
            }
        )
    })
})