/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('<GifItem /> test', () => { 

    const title = 'Independiente'
    const url = 'https://infiernorojo.com/cai.jpg'

    test('should match with the snapshot', () => {

        const { container } = render(<GifItem title={ title } url={ url } />)
        expect( container ).toMatchSnapshot()

    })
    test('should show the URL and ALT indicated', () => {  

        render(<GifItem title={ title } url={ url } />)
        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url )
        expect( alt ).toBe( title )

    })

})
