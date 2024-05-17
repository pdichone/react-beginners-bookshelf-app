/** @format */

import BookCard from './BookCard';

function BookList({ books }) {
  return (
    <div className="row">
      {books.map((book) => (
        <BookCard book={book} />
      ))}
    </div>
  );
}

export default BookList;
