import { useState, useEffect } from 'react'
import Header from './components/Header'
import Books from './components/Books'
import Pagination from './components/Pagination'
import Footer from './components/Footer'
// eslint-disable-next-line
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [books, setBooks] = useState([])
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('random')

  const URL = `http://openlibrary.org/search.json?q=${query}&page=${page}`;

  useEffect(() => {
    setIsLoading(true)
    setBooks([])
    fetchData()
    console.log('foo')

  }, [URL])
  
  // Fetch book data from API
  const fetchData = async () => {

    console.log(page)

    await fetch(URL)
    .then(res => res.json())
    .then(data => {
        data.docs.forEach(doc => {

          console.log(doc)

          if (doc.cover_i && doc.has_fulltext) {
            setBooks(books => [...books, {
              id: uuidv4(),
              title: doc.title ? doc.title : '',
              author: doc.author_name ? doc.author_name[0] : '',
              cover_img: doc.cover_i
            }])
          }

          setIsLoading(false)
      })
    })
    .catch(err => console.log(err))
  }

  // Add book to log
  const addBook = (book) => {
    setList(list => [...list, book])
    console.log(list)
  }

  return (
    <div className="App">
      <Header setPage={setPage} setQuery={setQuery} />
      <Books books={books} isLoading={isLoading} onAdd={addBook} />
      {books.length > 0 && <Pagination page={page} setPage={setPage} />}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
