import BookInfo from "./BookInfo";

const Books = ({books}) => {
    return(
        <div className='book-list'>
        {(!books || books.length === 0) ? (
        <p>No books found</p>
         ) : (
        books.map((book) => <BookInfo key={book.id} book={book}/>)
        )}
        </div>
    );
};

export default Books;