import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifApp = () => {

    const [categories, setCategories] = useState(['Stephen Curry'])

    const onAddCategory = (newCategory) => {
        if ( categories.includes(newCategory) ) return;
        setCategories( [newCategory, ...categories] )
    }

    return (
        <>
            <h2>Gif-App</h2>

            <AddCategory 
                onNewCategory={ (e)=> onAddCategory(e) }
            />
            
            {
                categories.map( category => (
                    <GifGrid key ={ category } category={category}/>
                ))
            }

        </>
    )
}

