import "./Styles/App.css";
import SearchBar from "./Components/SearchBar";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  return (
    <>
      <SearchBar></SearchBar>
    </>
  );
}

export default App;
