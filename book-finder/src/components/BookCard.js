import React from 'react';
import Book from './Book';

const BookCard = ({ books }) => {
  return (
    <section className="book-list">
      {books.map((book, index) => (
        <Book key={book.key} book={book} />
      ))}
    </section>
  );
};

export default BookCard;
