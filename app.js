import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { connectDB } from './config/db.js';
import { todoRouter } from './Router/todo.route.js';

//APP declaration
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
app.use(todoRouter)

//APP Start

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, ()   => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  }catch(e){
    console.log("Server Failed to Start");
    process.exit(1);
  }
}

startServer()
