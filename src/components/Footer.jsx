import { 
    FaSearch,
    FaHome,
    FaRandom,
    FaBookOpen
 } from 'react-icons/fa'

const Footer = ({ toggleForm, setShowForm, list }) => {

    let total = list.length

    const goTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        setShowForm(false)
    }

    // const getRandom = () => {
    //     fetchRandom()
    // }

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
                    onClick={toggleForm}
                >
                    <FaSearch size={'28px'}  />
                </li>
                {/* <li
                    onClick={getRandom}
                >
                    <FaRandom size={'28px'} />
                </li> */}
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