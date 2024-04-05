import React, { useState, useEffect } from 'react';
import './App.css';
import BookCard from './components/BookCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      fetchBooks('James Bond');
    }
  }, [searchTerm]);

  const fetchBooks = async (query) => {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await response.json();
    setBooks(data.docs);
  };

  const [timeoutId, setTimeoutId] = useState(null);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  
    if (timeoutId) clearTimeout(timeoutId);
  
    const newTimeoutId = setTimeout(() => {
      if (value.length >= 3) {
        fetchBooks(value);
      }
    }, 300);
  
    setTimeoutId(newTimeoutId);
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
      <BookCard books={books} />
    </div>
  );
}

export default App;
