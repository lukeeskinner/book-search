

const BookInfo = ({book}) => {
    const {title, author, image, link} = book.volumeInfo;
    return (
        <div className='book-card'>
        <img src={link?.thumbnail} alt={title} />
        <h3>{title}</h3>
        <p>by {author}</p>
        <a href={previewLink} target="_blank" rel="noopener noreferrer">
            View Book
        </a>
        </div>
    );
};

export default BookInfo;