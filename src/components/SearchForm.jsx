import { useState } from 'react' 

const SearchForm = ({ toggleForm, setIsLoading, setBooks, setPage, fetchData }) => {

    const [input, setInput] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setBooks([])

        setPage(1)
        // setQuery(input.toLowerCase().split(' ').join('+'))
        let query = input.toLowerCase().split(' ').join('+')

        fetchData(query)
        toggleForm()
        setInput('')
    }

  return (
    <div className="search-form">
        <div 
            className="overlay"
            onClick={toggleForm}
        ></div>
        <div className="card">
            <form 
                onSubmit={onSubmit}
                className='form'
            >
                <div className="form-group">
                    <input 
                        type="text" 
                        name="input" 
                        id="input" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                        // autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-block" type="submit">
                        <h2>Submit</h2>
                    </button> 
                </div>
            </form>
        </div>
    </div>
  )
}

export default SearchForm