import { useState } from 'react'
// import { FaSearch } from 'react-icons/fa'

const Header = ({ setQuery, setPage }) => {

    const [input, setInput] = useState('')

    // const onSubmit = (e) => {
    //     e.preventDefault()

    //     setPage(1)
    //     setQuery(input.toLowerCase().split(' ').join('+'))
        
    //     setInput('')
    // }

  return (
    <header className='header'>
        <div className="logo">
            <img src="https://fontmeme.com/permalink/220515/287d1716e27ea3e1dc4aaf2574ae8b63.png" alt="netflix-font" />
        </div>
        {/* <section className="form-container">
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
                    <button className="btn btn-block" type="submit">
                        <FaSearch size={'24px'}/>
                    </button> 
                </div>
            </form>
        </section> */}
    </header>
  )
}

export default Header