import { useState } from 'react'
import Results from './Results'
import { FaSearch, FaTimesCircle } from 'react-icons/fa'

const Search = ({ isLoading, setIsLoading, results, setResults, fetchData }) => {

    const [input, setInput] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setResults([])

        let query = input.toLowerCase().split(' ').join('+')

        fetchData(query)
        setInput('')
        // console.log(list);
    }

  return (
    <div className="search-form">
        <div className="search-field">
            <form 
                onSubmit={onSubmit}
                className='form'
            >
                <span className='search-icon'>
                    <FaSearch size={'28px'} />
                </span>
                <input 
                    type="text" 
                    name="input" 
                    id="input" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    autoComplete="off"
                    autoFocus="on"
                />
                <span 
                    className='clear-search' 
                    onClick={() => setInput('')}>
                    <FaTimesCircle size={'28px'} />
                </span>
            </form>
        </div>
        <Results 
            results={results} 
            isLoading={isLoading} 
        />
    </div>
  )
}

export default Search