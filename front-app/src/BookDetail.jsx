import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './BookDetail.css'

function BookDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState(null)
  const [categoryName, setCategoryName] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBookAndCategory = async () => {
      try {
        setLoading(true)
        const [bookResponse, categoriesResponse] = await Promise.all([
          fetch(`http://localhost:5000/books/${id}`),
          fetch('http://localhost:5000/categories')
        ])
        
        if (!bookResponse.ok) {
          throw new Error('Book not found')
        }
        if (!categoriesResponse.ok) {
          throw new Error('Failed to fetch categories')
        }
        
        const bookData = await bookResponse.json()
        const categoriesData = await categoriesResponse.json()
        
        const category = categoriesData.find(cat => cat.category_id === bookData.category_id)
        
        setBook(bookData)
        setCategoryName(category ? category.name : 'Unknown')
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBookAndCategory()
  }, [id])
  
  if (loading) {
    return (
      <div className="book-detail-container">
        <div className="book-not-found">
          <h2>Loading...</h2>
          <button onClick={() => navigate('/')} className="back-btn">Back to Store</button>
        </div>
      </div>
    )
  }

  if (error || !book) {
    return (
      <div className="book-detail-container">
        <div className="book-not-found">
          <h2>{error || 'Book Not Found'}</h2>
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
          <img src={book.image} alt={book.title} />
        </div>
        
        <div className="book-detail-info">
          <h1 className="book-detail-title">{book.title}</h1>
          <p className="book-detail-author">by {book.author}</p>
          <p className="book-detail-price">${book.price}</p>
          
          <div className="book-description">
            <h3>Description</h3>
            <p>{book.short_description}</p>
          </div>

          <div className="book-specifications">
            <h3>Book Details</h3>
            <div className="spec-grid">
              <div className="spec-item">
                <span className="spec-label">Book ID:</span>
                <span className="spec-value">{book.book_id}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Category:</span>
                <span className="spec-value">{categoryName}</span>
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