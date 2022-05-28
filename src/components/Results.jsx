import { FaImage, FaPlusCircle, FaCheckCircle } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { addBook, deleteBook } from '../features/bookSlice'
import Spinner from './Spinner'

const Results = ({ results, isLoading }) => {

  const dispatch = useDispatch()

  const bookList = useSelector((state) => state.books.value)

    if (isLoading) {
        return <Spinner />
    }

  return (
    <div className='container'>
        {results.map(result => (
          <div key={result.id} className="book">
            <div className="cover">
                {result.cover_img ?
                  <img
                    className='cover-img' 
                    src={`https://covers.openlibrary.org/b/id/${result.cover_img}-L.jpg`}
                    alt='Book cover'
                  /> 
                : 
                    <>
                        <FaImage size={'42px'} />
                        <h3>Could not find cover</h3>
                    </>
                }
            </div>
            {!bookList.some(book => book.id === result.id) ?
              <div 
                className='book-btn'
                onClick={() => dispatch(addBook(result))}
              >
                <div className="plus">
                  <FaPlusCircle size={'28px'} />
                </div>
                {/* <h3>My List</h3> */}
              </div>
            :
              <div
                className='book-btn'
                onClick={() => dispatch(deleteBook(result.id))}
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

export default Results