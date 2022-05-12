import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

const Pagination = () => {
  return (
    <div className='pagination'>
        <div className="btn-wrapper">
            <div 
              className="btn-left page-toggle"
              onClick={() => console.log('left')}
            >
                <FaChevronCircleLeft size={'42px'} />
                <h3>Prev Page</h3>
            </div>
            <div 
              className="btn-right page-toggle"
              onClick={() => console.log('right')}
            >
                <h3>Next Page</h3>
                <FaChevronCircleRight size={'42px'} />
            </div>
        </div>
    </div>
  )
}

export default Pagination