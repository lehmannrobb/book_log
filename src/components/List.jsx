import { FaImage, FaTimes } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBook } from '../features/bookSlice'

const List = ({ toggleModal, setIsLoading, results, setResults, fetchData }) => {

  const dispatch = useDispatch()

  const bookList = useSelector((state) => state.books.value)

  const getMore = (book) => {
    toggleModal()
    setIsLoading(true)
    setResults([])

    let query = book.isbn[0]

    fetchData(query)
    console.log(results)
  }

  return (
    <div className="book-list">
        {bookList.map(book => (
          <div 
            key={book.id} 
            className="book-row"
          >
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
            <div 
              className='book-info' 
              onClick={() => getMore(book)}
            >
              <h1>{book.title}</h1>
              <h3><em>-{book.author}</em></h3>
              <br></br>
              <p>Published: {book.published}</p>
            </div>
            <div 
              className='dlt-btn'
              onClick={() => dispatch(deleteBook(book.id))}
            >
              <FaTimes size={'28px'} />
            </div>
          </div>
        ))}
    </div>
  )
}

export default List