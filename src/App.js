import { useState, useEffect } from 'react'
import Header from './components/Header'
import List from './components/List'
import Search from './components/Search'
import Footer from './components/Footer'

function App() {

  const [books, setBooks] = useState([])
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY));
    if (storedBooks) setList(storedBooks);
  }, []);

  useEffect(() => {
    localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_KEY, JSON.stringify(list))
  }, [list]);
  
  // Fetch book data from API
  const fetchData = async (query) => {
    const URL = `http://openlibrary.org/search.json?q=${query}`

    await fetch(URL)
    .then(res => res.json())
    .then(data => {
        data.docs.forEach(doc => {

          if (doc.cover_i) {
            setBooks(books => [...books, {
              id: doc.key,
              isbn: doc.isbn,
              title: doc.title ? doc.title : '',
              author: doc.author_name ? doc.author_name[0] : '',
              cover_img: doc.cover_i
            }])
          }
        })
    })
    .catch(err => console.log(err))
    setIsLoading(false)
  }

  // Add book to log
  const addBook = (book) => {
    setList(list => [...list, book])
    console.log(book.title)
  }

  // Delete book from log
  const deleteBook = async (id) => {
    console.log(id)
    setList(list.filter(book => book.id !== id))
    
  }

  // Toggle search form
  const toggleForm = () => {
    setShowForm(!showForm)
    setBooks([])
    console.log(showForm)
  }

  return (
    <div className="App">
      {!showForm && <Header />}
      {showForm && 
        <Search 
          toggleForm={toggleForm}
          isLoading={isLoading}  
          setIsLoading={setIsLoading}
          books={books}
          setBooks={setBooks} 
          fetchData={fetchData}
          onAdd={addBook}
          onDelete={deleteBook}
          list={list}
        />
      }
      {!showForm && <List list={list} onDelete={deleteBook} />}
      <Footer toggleForm={toggleForm} setShowForm={setShowForm} list={list} />
    </div>
  );
}

export default App;
