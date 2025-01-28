import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import animalRoutes from './routes/animalRoutes';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(animalRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));