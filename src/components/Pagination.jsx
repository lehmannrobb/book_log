import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

const Pagination = ({ page, setPage }) => {

  const prevPage = () => {
    setPage(prev => prev - 1)
  }

  const nextPage = () => {
    setPage(prev => prev + 1)
  }

  return (
    <div className='pagination'>
        <div className="btn-wrapper">
            { page > 1 ? 
              <div 
                className="btn-left page-toggle"
                onClick={prevPage}
              >
                <FaChevronCircleLeft 
                  className='fa-btn' 
                  size={'42px'} 
                />
                <h3>Prev Page</h3>
              </div>
            : ''
            }
            <div 
              className="btn-right page-toggle"
              onClick={nextPage}
            >
                <h3>Next Page</h3>
                <FaChevronCircleRight 
                  className='fa-btn' 
                  size={'42px'} 
                />
            </div>
        </div>
    </div>
  )
}

export default Pagination