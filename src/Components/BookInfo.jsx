

const BookInfo = ({book}) => {
    const {title, authors, imageLinks, previewLink} = book.volumeInfo;
    return (
        <div className='book-card'>
        <img src={imageLinks?.thumbnail} alt={title} />
        <h3>{title}</h3>
        <p>by {authors?.join(", ")}</p>
        <a href={previewLink} target="_blank" rel="noopener noreferrer">
            View Book
        </a>
        </div>
    );
};

export default BookInfo;