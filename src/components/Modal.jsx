import { FaTimes } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { addBook, deleteBook } from '../features/bookSlice'
import { FaPlusCircle, FaCheckCircle } from 'react-icons/fa'
// eslint-disable-next-line
import Spinner from './Spinner'

const Modal = ({ toggleModal, isLoading, results }) => {

    const dispatch = useDispatch()

    const bookList = useSelector((state) => state.books.value)

  return (
    <div className='modal'>
        <div className="modal-close" onClick={toggleModal}>
            <FaTimes size={'28px'} />
        </div>
        {results.map(item => (
            <div className='book-modal'>
                <div className="modal-row">
                    <div className="full-cover">
                        <img
                            className='cover-img' 
                            src={`https://covers.openlibrary.org/b/id/${item.cover_img}-M.jpg`}
                            alt='Book cover'
                        /> 
                    </div>
                    <div className="modal-info">
                        <h1>{item.title}</h1>
                        <h4>-{item.author}</h4>
                        <p>Published: {item.published}</p>
                        {!bookList.some(book => book.id === item.id) ?
                            <div 
                                className='modal-btn'
                                onClick={() => dispatch(addBook(item))}
                            >
                                <div className="plus">
                                    <FaPlusCircle size={'28px'} />
                                </div>
                                <h3>My List</h3>
                            </div>
                        :
                            <div
                                className='modal-btn'
                                onClick={() => dispatch(deleteBook(item.id))}
                            >
                                <div className="check">
                                    <FaCheckCircle size={'28px'} />
                                </div>
                                <h3>My List</h3>
                            </div>
                        }
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Modal