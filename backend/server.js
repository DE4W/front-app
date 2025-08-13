import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './src/routes/auth.js';
import bookRoutes from './src/routes/books.js';
import categoryRoutes from './src/routes/categories.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/books', bookRoutes);
app.use('/categories', categoryRoutes);

app.get('/', (req, res) => {
  res.send('Bookstore API running');
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});