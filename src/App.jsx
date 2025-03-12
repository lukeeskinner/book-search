import "./Styles/App.css";
import SearchBar from "./Components/SearchBar";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;


function App() {
  return (
    <>
      <SearchBar></SearchBar>
    </>
  );
}

export default App;
