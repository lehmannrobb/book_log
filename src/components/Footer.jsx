import { 
    FaSearch,
    FaHome,
    FaRandom,
    FaBookOpen
 } from 'react-icons/fa'

const Footer = ({ toggleForm }) => {

    const goTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

  return (
    <footer>
        <div className="row">
            <ul>
                <li
                    onClick={goTop}
                >
                    <FaHome size={'24px'} />
                </li>
                <li
                    onClick={toggleForm}
                >
                    <FaSearch size={'24px'}  />
                </li>
                <li>
                    <FaRandom size={'24px'} />
                </li>
                <li>
                    <FaBookOpen size={'24px'} />
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer