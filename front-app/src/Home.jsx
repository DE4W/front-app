import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'

function Home() {
  const navigate = useNavigate()
  const [books, setBooks] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [booksResponse, categoriesResponse] = await Promise.all([
          fetch('http://localhost:5000/books'),
          fetch('http://localhost:5000/categories')
        ])
        
        if (!booksResponse.ok) {
          throw new Error('Failed to fetch books')
        }
        if (!categoriesResponse.ok) {
          throw new Error('Failed to fetch categories')
        }
        
        const booksData = await booksResponse.json()
        const categoriesData = await categoriesResponse.json()
        
        setBooks(booksData)
        setCategories(categoriesData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleViewDetails = (bookId) => {
    navigate(`/book/${bookId}`)
  }

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
  }

  const filteredBooks = selectedCategory 
    ? books.filter(book => book.category_id === parseInt(selectedCategory))
    : books

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="bookstore">
        <header className="bookstore-header">
          <h1>📚 BookStore</h1>
          <p>Loading books...</p>
        </header>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bookstore">
        <header className="bookstore-header">
          <h1>📚 BookStore</h1>
          <p>Error loading books: {error}</p>
        </header>
      </div>
    )
  }

  return (
    <div className="bookstore">
      <header className="bookstore-header">
        <h1>📚 BookStore</h1>
        <p>Discover amazing books from our collection</p>
      </header>

      <div className="filter-section" style={{ padding: '20px', textAlign: 'center' }}>
        <label htmlFor="category-filter" style={{ marginRight: '10px', fontWeight: 'bold' }}>
          Filter by Category:
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          style={{
            padding: '8px 12px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            fontSize: '16px'
          }}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category.category_id} value={category.category_id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      
      <div className="books-grid">
        {filteredBooks.map(book => (
          <div key={book.book_id} className="book-card">
            <div className="book-cover">
              <img src={book.image} alt={book.title} />
            </div>
            <div className="book-info">
              <div className="book-content">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>
                <p className="book-price">${book.price}</p>
                <div className="book-details">
                  <p className="book-description">{book.short_description}</p>
                </div>
              </div>
              <button 
                className="more-details-btn"
                onClick={() => handleViewDetails(book.book_id)}
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