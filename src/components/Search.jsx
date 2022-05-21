import { useState } from 'react'
import Books from './Books'
import { FaSearch, FaTimesCircle } from 'react-icons/fa'

const Search = ({ toggleForm, isLoading, setIsLoading, books, setBooks, fetchData, onAdd }) => {

    const [input, setInput] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setBooks([])

        let query = input.toLowerCase().split(' ').join('+')

        fetchData(query)
        setInput('')
    }

  return (
    <div className="search-form">
        <div 
            className="overlay"
            onClick={toggleForm}
        ></div>
        <div className="search-field">
            <form 
                onSubmit={onSubmit}
                className='form'
            >
                <span className='search-icon'>
                    <FaSearch size={'24px'} />
                </span>
                <input 
                    type="text" 
                    name="input" 
                    id="input" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    autoComplete="off"
                />
                <span 
                    className='clear-search' 
                    onClick={() => setInput('')}>
                    <FaTimesCircle size={'24px'} />
                </span>
            </form>
        </div>
        <Books 
            books={books} 
            isLoading={isLoading} 
            onAdd={onAdd}
        />
    </div>
  )
}

export default Search