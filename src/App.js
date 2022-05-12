import { useState, useEffect } from 'react'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import Pagination from './components/Pagination'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  const fetchData = async (query) => {
    const url = `http://openlibrary.org/search.json?title=${query}&limit=20`

    await fetch(url)
    .then(res => res.json())
    .then(data => data.docs.forEach(doc => {

        console.log(doc)
        setBooks(books => [...books, {
            id: uuidv4(),
            title: doc.title,
            author: doc.author_name,
            cover_img: doc.cover_i
        }])
        setIsLoading(false)
    }))
    .catch(err => console.log(err))
    
}

  return (
    <div className="App">
      <SearchForm setBooks={setBooks} setIsLoading={setIsLoading} fetchData={fetchData} />
      <SearchResults books={books} isLoading={isLoading} />
      {books.length > 0 && <Pagination />}
    </div>
  );
}

export default App;
