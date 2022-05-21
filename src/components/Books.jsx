import { FaImage, FaPlus } from 'react-icons/fa'
import Spinner from './Spinner'

const Books = ({ books, isLoading, onAdd }) => {

    if (isLoading) {
        return <Spinner />
    }

  return (
    <div className='container'>
        {books.map(book => (
          <div key={book.id} className="book">
            <div className="cover">
                {book.cover_img ?
                  <img
                    className='cover-img' 
                    src={`https://covers.openlibrary.org/b/id/${book.cover_img}-L.jpg`}
                    alt='Book cover'
                  /> 
                : 
                    <>
                        <FaImage size={'42px'} />
                        <h3>Could not find cover</h3>
                    </>
                }
            </div>
            <button 
              className='add-btn'
              onClick={() => onAdd(book)}
            >
              <FaPlus className='plus' />
              <h3>Add to list</h3>
            </button>
          </div>
        ))}
    </div>
  )
}

export default Books