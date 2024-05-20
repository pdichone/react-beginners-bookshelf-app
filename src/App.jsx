/** @format */

import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BookList from './components/BookList';
import fetchBooks from './serices/api-client';

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Java');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [searchTerm]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const items = await fetchBooks(searchTerm);
      setBooks(items);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  function handleSearch(query) {
    setSearchTerm(query);
    console.log('Updated Search Term:', query);
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
