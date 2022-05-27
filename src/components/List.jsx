import { FaImage, FaTimes } from 'react-icons/fa'

const List = ({ list, onDelete }) => {

  return (
    <div className="book-list">
        {list.map(book => (
          <div key={book.id} className="book-row">
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
            <div className='book-info'>
              <h1>{book.title}</h1>
              <h3><em>-{book.author}</em></h3>
              <br></br>
              <p>Published: {book.published}</p>
            </div>
            <div 
              className='dlt-btn'
              onClick={() => onDelete(book.id)}
            >
              <FaTimes size={'28px'} />
            </div>
          </div>
        ))}
    </div>
  )
}

export default List