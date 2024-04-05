import React from 'react';

const Book = ({ book }) => {
  const { title, first_publish_year, author_name, key } = book;
  const amazonSearchUrl = `https://www.amazon.com/s?k=${key}`;

  return (
    <div className="book">
      <h3>{title}</h3>
      <p>First published: {first_publish_year}</p>
      <p>Author: {author_name ? author_name.join(', ') : 'N/A'}</p>
      <a href={amazonSearchUrl} target="_blank" rel="noopener noreferrer">View on Amazon</a>
    </div>
  );
};

export default Book;
