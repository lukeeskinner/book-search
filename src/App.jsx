import SearchBar from "./Components/SearchBar";
import Books from "./Components/Books";
import { useState } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://www.googleapis.com/books/v1/volumes";

const App = () => {
  const [books, setBooks] = useState([]);

  const onSearch = async (query) => {
    try {
      const response = await fetch(`${API_URL}?q=${query}&maxResults=40&key=${API_KEY}`);
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
    }
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <Books books={books} />
    </>
  );
};

export default App;
