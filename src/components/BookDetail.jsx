/** @format */

function BookDetail({ book, onClose }) {
  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{book.title}</h5>
            {/* <button
              className="btn btn-danger"
              type="button"
              onClick={onClose}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button> */}
          </div>
          <div className="modal-body">
            <img
              src={book.imageLinks?.thumbnail}
              alt={book.title}
              className="img-fluid mb-3"
            />
            <p>
              <strong>Authors:</strong> {book.authors.join(', ')}
            </p>
            <p>
              <strong>Published Date:</strong> {book.publishedDate}
            </p>
            <p>
              <strong>Description:</strong> {book.description}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookDetail;
