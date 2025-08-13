import { useParams, useNavigate } from 'react-router-dom'
import './BookDetail.css'

function BookDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const books = [
    {
      id: 1,
      name: "The Great Gatsby",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
      price: 12.99,
      author: "F. Scott Fitzgerald",
      releaseDate: "1925-04-10",
      publisher: "Charles Scribner's Sons",
      isbn: "978-0-7432-7356-5",
      pages: 180,
      genre: "Literary Fiction",
      language: "English",
      description: "Set in the Jazz Age on prosperous Long Island and in New York City, The Great Gatsby provides a critical social history of Prohibition-era America. The novel tells the tragic story of Jay Gatsby and his obsessive pursuit of Daisy Buchanan."
    },
    {
      id: 2,
      name: "To Kill a Mockingbird",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
      price: 14.99,
      author: "Harper Lee",
      releaseDate: "1960-07-11",
      publisher: "J.B. Lippincott & Co.",
      isbn: "978-0-06-112008-4",
      pages: 281,
      genre: "Southern Gothic Fiction",
      language: "English",
      description: "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice. Through the eyes of Scout Finch, you witness her father Atticus's courageous fight for justice."
    },
    {
      id: 3,
      name: "1984",
      cover: "https://images.unsplash.com/photo-1495640452828-3df6795cf69b?w=400&h=600&fit=crop",
      price: 13.99,
      author: "George Orwell",
      releaseDate: "1949-06-08",
      publisher: "Secker & Warburg",
      isbn: "978-0-452-28423-4",
      pages: 328,
      genre: "Dystopian Fiction",
      language: "English",
      description: "A dystopian social science fiction novel that follows the life of Winston Smith, a low-ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother."
    },
    {
      id: 4,
      name: "Pride and Prejudice",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      price: 11.99,
      author: "Jane Austen",
      releaseDate: "1813-01-28",
      publisher: "T. Egerton",
      isbn: "978-0-14-143951-8",
      pages: 432,
      genre: "Romance Novel",
      language: "English",
      description: "A romantic novel that follows the character development of Elizabeth Bennet, the dynamic protagonist who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness."
    },
    {
      id: 5,
      name: "The Catcher in the Rye",
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
      price: 15.99,
      author: "J.D. Salinger",
      releaseDate: "1951-07-16",
      publisher: "Little, Brown and Company",
      isbn: "978-0-316-76948-0",
      pages: 277,
      genre: "Coming-of-age Fiction",
      language: "English",
      description: "The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the 'phoniness' of the adult world."
    },
    {
      id: 6,
      name: "Harry Potter and the Philosopher's Stone",
      cover: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop",
      price: 16.99,
      author: "J.K. Rowling",
      releaseDate: "1997-06-26",
      publisher: "Bloomsbury",
      isbn: "978-0-7475-3269-9",
      pages: 223,
      genre: "Fantasy Fiction",
      language: "English",
      description: "The first novel in the Harry Potter series follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry."
    },
    {
      id: 7,
      name: "The Lord of the Rings",
      cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      price: 24.99,
      author: "J.R.R. Tolkien",
      releaseDate: "1954-07-29",
      publisher: "George Allen & Unwin",
      isbn: "978-0-618-64015-7",
      pages: 1178,
      genre: "High Fantasy",
      language: "English",
      description: "An epic high-fantasy novel that follows the journey of hobbits, elves, dwarves, men, and others on their quest to destroy the One Ring and defeat the Dark Lord Sauron. A tale of friendship, courage, and the triumph of good over evil."
    },
    {
      id: 8,
      name: "The Chronicles of Narnia",
      cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
      price: 19.99,
      author: "C.S. Lewis",
      releaseDate: "1950-10-16",
      publisher: "Geoffrey Bles",
      isbn: "978-0-06-023481-4",
      pages: 767,
      genre: "Children's Fantasy",
      language: "English",
      description: "A series of seven fantasy novels that tells the adventures of children who play central roles in the unfolding history of the Narnian world, guided by the great lion Aslan."
    },
    {
      id: 9,
      name: "Dune",
      cover: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=400&h=600&fit=crop",
      price: 17.99,
      author: "Frank Herbert",
      releaseDate: "1965-11-01",
      publisher: "Chilton Books",
      isbn: "978-0-441-17271-9",
      pages: 688,
      genre: "Science Fiction",
      language: "English",
      description: "Set in the distant future amidst a feudal interstellar society, it tells the story of young Paul Atreides and his family as they become embroiled in a war over the desert planet Arrakis and its spice melange."
    },
    {
      id: 10,
      name: "The Hobbit",
      cover: "https://images.unsplash.com/photo-1606955725526-91675a98ef1c?w=400&h=600&fit=crop",
      price: 13.99,
      author: "J.R.R. Tolkien",
      releaseDate: "1937-09-21",
      publisher: "George Allen & Unwin",
      isbn: "978-0-547-92822-7",
      pages: 310,
      genre: "Fantasy Adventure",
      language: "English",
      description: "A fantasy novel that follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by a dragon named Smaug. Bilbo's journey takes him from his comfortable home to lands beyond."
    }
  ]

  const book = books.find(b => b.id === parseInt(id))
  
  if (!book) {
    return (
      <div className="book-detail-container">
        <div className="book-not-found">
          <h2>Book Not Found</h2>
          <button onClick={() => navigate('/')} className="back-btn">Back to Store</button>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="book-detail-container">
      <div className="book-detail-header">
        <button onClick={() => navigate('/')} className="back-btn">
          ← Back to Store
        </button>
      </div>

      <div className="book-detail-content">
        <div className="book-detail-image">
          <img src={book.cover} alt={book.name} />
        </div>
        
        <div className="book-detail-info">
          <h1 className="book-detail-title">{book.name}</h1>
          <p className="book-detail-author">by {book.author}</p>
          <p className="book-detail-price">${book.price}</p>
          
          <div className="book-description">
            <h3>Description</h3>
            <p>{book.description}</p>
          </div>

          <div className="book-specifications">
            <h3>Book Details</h3>
            <div className="spec-grid">
              <div className="spec-item">
                <span className="spec-label">ISBN:</span>
                <span className="spec-value">{book.isbn}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Pages:</span>
                <span className="spec-value">{book.pages}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Genre:</span>
                <span className="spec-value">{book.genre}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Language:</span>
                <span className="spec-value">{book.language}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Publisher:</span>
                <span className="spec-value">{book.publisher}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Release Date:</span>
                <span className="spec-value">{formatDate(book.releaseDate)}</span>
              </div>
            </div>
          </div>

          <div className="book-actions">
            <button className="add-to-cart-detail-btn">Add to Cart</button>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetail