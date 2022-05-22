import { FaImage, FaPlusCircle, FaCheckCircle } from 'react-icons/fa'
import Spinner from './Spinner'

const Books = ({ books, isLoading, onAdd, onDelete, list }) => {

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
            {!list.some(item => item.title === book.title) ?
              <div 
                className='book-btn'
                onClick={() => onAdd(book)}
              >
                <div className="plus">
                  <FaPlusCircle size={'28px'} />
                </div>
                {/* <h3>My List</h3> */}
              </div>
            :
              <div
                className='book-btn'
                onClick={() => onDelete(book.id)}
              >
                <div className="check">
                  <FaCheckCircle size={'28px'} />
                </div>
                {/* <h3>My List</h3> */}
              </div>
            }
          </div>
        ))}
    </div>
  )
}

export default Books