import { useNavigate } from 'react-router-dom'
import './App.css'

function Home() {
  const navigate = useNavigate()

  const handleViewDetails = (bookId) => {
    navigate(`/book/${bookId}`)
  }

  const books = [
    {
      id: 1,
      name: "The Great Gatsby",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      price: 12.99,
      author: "F. Scott Fitzgerald",
      releaseDate: "1925-04-10",
      publisher: "Charles Scribner's Sons"
    },
    {
      id: 2,
      name: "To Kill a Mockingbird",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      price: 14.99,
      author: "Harper Lee",
      releaseDate: "1960-07-11",
      publisher: "J.B. Lippincott & Co."
    },
    {
      id: 3,
      name: "1984",
      cover: "https://images.unsplash.com/photo-1495640452828-3df6795cf69b?w=300&h=400&fit=crop",
      price: 13.99,
      author: "George Orwell",
      releaseDate: "1949-06-08",
      publisher: "Secker & Warburg"
    },
    {
      id: 4,
      name: "Pride and Prejudice",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      price: 11.99,
      author: "Jane Austen",
      releaseDate: "1813-01-28",
      publisher: "T. Egerton"
    },
    {
      id: 5,
      name: "The Catcher in the Rye",
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
      price: 15.99,
      author: "J.D. Salinger",
      releaseDate: "1951-07-16",
      publisher: "Little, Brown and Company"
    },
    {
      id: 6,
      name: "Harry Potter and the Philosopher's Stone",
      cover: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=300&h=400&fit=crop",
      price: 16.99,
      author: "J.K. Rowling",
      releaseDate: "1997-06-26",
      publisher: "Bloomsbury"
    },
    {
      id: 7,
      name: "The Lord of the Rings",
      cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      price: 24.99,
      author: "J.R.R. Tolkien",
      releaseDate: "1954-07-29",
      publisher: "George Allen & Unwin"
    },
    {
      id: 8,
      name: "The Chronicles of Narnia",
      cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop",
      price: 19.99,
      author: "C.S. Lewis",
      releaseDate: "1950-10-16",
      publisher: "Geoffrey Bles"
    },
    {
      id: 9,
      name: "Dune",
      cover: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=300&h=400&fit=crop",
      price: 17.99,
      author: "Frank Herbert",
      releaseDate: "1965-11-01",
      publisher: "Chilton Books"
    },
    {
      id: 10,
      name: "The Hobbit",
      cover: "https://images.unsplash.com/photo-1606955725526-91675a98ef1c?w=300&h=400&fit=crop",
      price: 13.99,
      author: "J.R.R. Tolkien",
      releaseDate: "1937-09-21",
      publisher: "George Allen & Unwin"
    }
  ]

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="bookstore">
      <header className="bookstore-header">
        <h1>📚 BookStore</h1>
        <p>Discover amazing books from our collection</p>
      </header>
      
      <div className="books-grid">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <div className="book-cover">
              <img src={book.cover} alt={book.name} />
            </div>
            <div className="book-info">
              <div className="book-content">
                <h3 className="book-title">{book.name}</h3>
                <p className="book-author">by {book.author}</p>
                <p className="book-price">${book.price}</p>
                <div className="book-details">
                  <p className="book-release">Released: {formatDate(book.releaseDate)}</p>
                  <p className="book-publisher">Publisher: {book.publisher}</p>
                </div>
              </div>
              <button 
                className="more-details-btn"
                onClick={() => handleViewDetails(book.id)}
              >
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home