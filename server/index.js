import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
    res.send('Hello world')
})

const startServer = async () => {
    try {
        connectDB("mongodb://127.0.0.1:27017/AI");
        app.listen(8080, () => console.log('server has started on port http://localhost:8080'))

    } catch (error) {
        console.log(error);

    }
}
startServer();



