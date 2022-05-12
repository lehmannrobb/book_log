import { FaImage } from 'react-icons/fa'
import Spinner from './Spinner'

const SearchResults = ({ books, isLoading }) => {

    if (isLoading) {
        return <Spinner />
    }

  return (
    <div className='container'>
        {books.map(book => (
          <div key={book.id} className="book">
            <div className="cover">
                {book.cover_img ?
                <img src={`https://covers.openlibrary.org/b/id/${book.cover_img}-M.jpg`} /> 
                : 
                    <>
                        <FaImage size={'42px'} />
                        <h3>Could not find cover</h3>
                    </>
                }
            </div>
            <h2>{book.title}</h2>
            <p>-{book.author}</p>
          </div>
        ))}
    </div>
  )
}

export default SearchResults