
import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGifs(category);
        
    return (
        <>
            <h3>{ category }</h3>
            <hr />
            { isLoading && <p>Loading...</p> }
            <div className="card-grid">
                {
                    images.map( ( img ) => (
                        <GifItem
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </> 
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

