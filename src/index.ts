import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routers/auth.routers';
import mongoose from 'mongoose';
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT
const MONGO_URL = process.env.MONGO_URI as string


const app = express();
app.use(express.json());

app.use("/api/v1/auth", authRouter)
app.get('/', (req, res) => {
  res.send('Personal Finance Management System API is running');
});


mongoose
  .connect(MONGO_URL)

  .then(() => {
    console.log('Connected to MongoDB');
  })

  .catch(err => {
    console.error('Error connecting to MongoDB:', `${err.message}`);
   process.exit(1);
   
  });
  
  app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});
