import "./Styles/App.css";
import SearchBar from "./Components/SearchBar";
import Books from "./Components/Books";
import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [books, setBooks] = useState([]);
  
  const onSearch = async (query) => {
    const response = await fetch(`${API_URL}?q=${query}&key=${API_KEY}`);
    const data = await response.json();
    setBooks(data.items || []); 
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <Books books={books} />
    </>
  );
};

export default App;
