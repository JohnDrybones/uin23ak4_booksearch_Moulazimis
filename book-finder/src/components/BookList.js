import React from 'react';
import Book from './Book';

const BookList = ({ books }) => {
  return (
    <section className="book-list">
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </section>
  );
};

export default BookList;
