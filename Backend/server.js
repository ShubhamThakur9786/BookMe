import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import http from 'http';
import {connectDB} from './config/db.js'

const PORT = process.env.PORT || 5000;
const app = express();

//middlewares

app.use(express.json());
app.use(cors());



//DB
connectDB();



//Routes

app.get("/", (req, res) => {
    res.send("Api running");
})

const server = http.createServer(app);

server.on("error", (error) => {
    if(error.code === "EADDRINUSE") {
        console.error(`Port ${PORT} is already in use!`)
        process.exit(1);
    }
    throw error;
})

server.listen(PORT, () => {
    console.log(`Server is listen on http://localhost:${PORT}`);
})