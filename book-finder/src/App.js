import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
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
      <main>
        <section className="book-list">
          {/* Boklisten */}
          <p>Søk etter en bok for å starte.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
