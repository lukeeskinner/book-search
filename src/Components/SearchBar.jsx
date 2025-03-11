import '../SearchBar.css';

function SearchBar() {

    return(
        <>
        <div className="search-bar">
        <input className='search-input' type="text" placeholder="Search for a book..." />
        <button className='search-button'>Search</button>
        </div>
        </>

    )

}

export default SearchBar;