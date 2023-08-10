/* eslint-disable no-undef */

import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('useFetchGifs test', () => {

    test('should return initial state', async () => {

        const { result } = renderHook(() => useFetchGifs('Independiente'));
        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    })
    
    test('should return an array of images and isLoading in false', async() => {

        const { result } = renderHook(() => useFetchGifs('Independiente'));

        await waitFor(() => {
            expect(result.current.images.length).toBeGreaterThan(0);
        },
        {
            timeout: 5000
        })
        
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })

})