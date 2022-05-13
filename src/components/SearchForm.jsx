import { useState } from 'react'

const SearchForm = ({ setSearch, setPage }) => {

    const [input, setInput] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        setSearch('')
        setPage(1)

        const query = input.toLowerCase().split(' ').join('+')
        setSearch(query)
        
        setInput('')
    }

  return (
    <div>
        <section className="form-container">
            <form onSubmit={onSubmit} className='form'>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="input" 
                        id="input" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-block" type="submit">Search</button> 
                </div>
            </form>
        </section>
    </div>
  )
}

export default SearchForm