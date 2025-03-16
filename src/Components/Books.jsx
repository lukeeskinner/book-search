import BookInfo from "./BookInfo";
import "../Styles/Books.css";


const Books = ({books}) => {
    return(
        <div className='book-list'>
        {books.map((book) => <BookInfo key={book.id} book={book}/>)}
        
        </div>
    );
};

export default Books