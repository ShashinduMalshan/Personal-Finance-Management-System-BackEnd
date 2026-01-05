import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import authRouter from './routers/auth.routers';
import incomeRouter from './routers/income.routers';
import { startSalaryCron } from './jobs/salaryCron';
import mongoose from 'mongoose';
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT
const MONGO_URL = process.env.MONGO_URI as string


const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
)


app.use("/api/v1/auth", authRouter)
app.get('/', (req, res) => {
  res.send('Personal Finance Management System API is running');
});
app.use("/api/v1/income", incomeRouter)


mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");

    startSalaryCron();

    app.listen(SERVER_PORT, () => {
      console.log(`Server is running on port ${SERVER_PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  });

