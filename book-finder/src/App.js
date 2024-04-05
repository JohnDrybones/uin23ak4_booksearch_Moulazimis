import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      fetchBooks('James Bond');
    }
  }, [searchTerm]);

  const fetchBooks = async (query) => {
    const response = await fetch(`http://openlibrary.org/search.json?q=${query}`);
    const data = await response.json();
    setBooks(data.docs);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.length >= 3) {
      fetchBooks(event.target.value);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Søk etter bøker..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </header>
      <BookList books={books} />
    </div>
  );
}

export default App;
