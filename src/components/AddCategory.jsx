import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }
    
    const handleSubmit = (event) => {
      event.preventDefault();

      const trimmedInputValue = inputValue.trim();

      if (trimmedInputValue.length < 1) return;
      onNewCategory(trimmedInputValue);

      setInputValue('');
    }

    return (
        <>
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              placeholder="Buscar gifs"
              value={inputValue}
              onChange={ handleInputChange }
            />
          </form>
        </>
    )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
