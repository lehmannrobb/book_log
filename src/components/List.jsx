import { FaImage, FaTimes } from 'react-icons/fa'

const List = ({ list, onDelete }) => {
  // const getMore = (book) => {
  //   console.log(book.id);
  // }

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
              <p><em>-{book.author}</em></p>
            </div>
            <div 
              className='dlt-btn'
              onClick={() => onDelete(book.id)}
            >
              <FaTimes size={'24px'} />
            </div>
            {/* <div 
              className='arrow'
              onClick={() => getMore(book)}
            >
              <FaChevronRight size={'36px'} />
            </div> */}
          </div>
        ))}
    </div>
  )
}

export default List