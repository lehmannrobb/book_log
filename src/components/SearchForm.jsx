import { useState } from 'react'

const SearchForm = ({ setBooks, setIsLoading, fetchData }) => {

    const [input, setInput] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        setBooks([])
        setIsLoading(true)
        const query = input.toLowerCase().split(' ').join('+')

        fetchData(query)
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
                    <button className="btn btn-block" type="submit">Find Book</button> 
                </div>
            </form>
        </section>
    </div>
  )
}

export default SearchForm