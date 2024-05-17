/** @format */
import 'react-loading-skeleton/dist/skeleton.css';
function BookCard({ book }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img
          className="card-img-top"
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
        <div className="card-body">
          <p className="card-text">{book.volumeInfo.authors.join(', ')}</p>
          <button className="btn btn-primary"> See More</button>
        </div>
      </div>
    </div>
  );
}
export default BookCard;
