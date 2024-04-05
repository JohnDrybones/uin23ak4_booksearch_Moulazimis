import React from 'react';
import Book from './Book';

const BookCard = ({ books }) => {
  return (
    <section className="book-list">
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </section>
  );
};

export default BookCard;
