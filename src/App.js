import { useState, useEffect } from 'react'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import Pagination from './components/Pagination'
// eslint-disable-next-line
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setIsLoading(true)
    setBooks([])
    fetchData()

  }, [page, search])
  
  const fetchData = async () => {
    const url = `http://openlibrary.org/search.json?q=${search ? search : null}&page=${page}`

    await fetch(url)
    .then(res => res.json())
    .then(data => data.docs.forEach(doc => {

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
    }))
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <SearchForm setPage={setPage} setSearch={setSearch} />
      <SearchResults books={books} isLoading={isLoading} />
      {books.length > 0 && <Pagination page={page} setPage={setPage} />}
    </div>
  );
}

export default App;
