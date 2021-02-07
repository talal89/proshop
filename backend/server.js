import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import colors from 'colors';

import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

const app = express();

dotenv.config()

connectDb()

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 5000, console.log(`Server running in ${process.env.NODE_ENV} mode on port 5000`.yellow.bold));