import React from 'react';

const Book = ({ book }) => {
  const { title, first_publish_year, author_name, key, cover_i } = book;
  const amazonSearchUrl = `https://www.amazon.com/s?k=${book.isbn ? book.isbn[0] : ''}`;
  const coverUrl = cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg` : '/images/no-cover.jpg';

  return (
    <div className="book">
      <img src={coverUrl} alt={`Cover of ${title}`} /> {}
      <h3>{title}</h3>
      <p>First published: {first_publish_year}</p>
      <p>Author: {author_name ? author_name.join(', ') : 'N/A'}</p>
      <a href={amazonSearchUrl} target="_blank" rel="noopener noreferrer">Check on Amazon</a>
    </div>
  );
};

export default Book;
