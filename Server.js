import express from 'express';
import ConnectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

ConnectDB();
const Server = express()

Server.use(express.json());

Server.get('/',(req,res) => {
    res.status(200).json({message: "Welcome to the Safe Auth Server."})
})

const Port = 4898;

Server.listen(Port, () => {
    console.log(`🚀 Server running on http://localhost:${Port}`);
})