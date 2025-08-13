import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import BookDetail from './BookDetail'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  )
}

export default App
