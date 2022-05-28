import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import List from './components/List'
import Search from './components/Search'
import Footer from './components/Footer'

function App() {

  const bookList = useSelector((state) => state.books.value)

  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_KEY, JSON.stringify(bookList))
  }, [bookList]);
  
  // Fetch book data from API
  const fetchData = async (query) => {
    const URL = `http://openlibrary.org/search.json?q=${query}`

    await fetch(URL)
    .then(res => res.json())
    .then(data => {
        data.docs.forEach(doc => {

          if (doc.cover_i) {
            setResults(results => [...results, {
              id: doc.key,
              isbn: doc.isbn,
              title: doc.title ? doc.title : '',
              author: doc.author_name ? doc.author_name[0] : '',
              published: doc.first_publish_year ? doc.first_publish_year : '',
              cover_img: doc.cover_i
            }])
          }
        })
    })
    .catch(err => console.log(err))
    setIsLoading(false)
  }

  // Toggle search form
  const toggleForm = () => {
    setShowForm(!showForm)
    setResults([])
  }

  return (
    <div className="App">
      {!showForm && <Header />}
      {showForm && 
        <Search 
          toggleForm={toggleForm}
          isLoading={isLoading}  
          setIsLoading={setIsLoading}
          results={results}
          setResults={setResults} 
          fetchData={fetchData}
        />
      }
      {!showForm && <List />}
      <Footer toggleForm={toggleForm} setShowForm={setShowForm} />
    </div>
  );
}

export default App;
