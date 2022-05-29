import { 
    FaSearch,
    FaHome,
    FaBookOpen
 } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Footer = ({ toggleForm, setShowForm, setShowModal }) => {

    const bookList = useSelector((state) => state.books.value)

    let total = bookList.length

    const goTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        setShowForm(false)
        setShowModal(false)
    }

    const openSearch = () => {
        setShowModal(false)
        toggleForm()
    }

  return (
    <footer>
        <div className="row">
            <ul>
                <li
                    onClick={goTop}
                >
                    <FaHome size={'28px'} />
                </li>
                <li
                    onClick={openSearch}
                >
                    <FaSearch size={'28px'}  />
                </li>
                <li>
                    <div className="total-wrapper">
                        <FaBookOpen size={'28px'} />
                        <div className='circle'>{total}</div>
                    </div>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer