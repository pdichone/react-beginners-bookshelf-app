/** @format */

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BookList from './components/BookList';
import useBooks from './services/useBooks';

function App() {
  const { books, loading, setSearchTerm } = useBooks('java');
  
  function handleSearch(query) {
    setSearchTerm(query);
  }

  return (
    <>
      <NavBar onSearch={handleSearch} />

      {loading ? (
        <p class="placeholder-glow display-3 text-body-secondary">
          <span class="placeholder col-12">Loading</span>
        </p>
      ) : (
        <BookList books={books} />
      )}

      <Footer />
    </>
  );
}

export default App;
