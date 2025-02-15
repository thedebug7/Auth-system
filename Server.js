import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './config/db.js';
import authRout from './routes/authRoutes.js';

dotenv.config();
ConnectDB();

const Server = express()
Server.use(express.json());

Server.get('/',(req,res) => {
    res.status(200).json({message: "Welcome to the Safe Auth Server."})
})

Server.use('/api/auth',authRout)

const Port =process.env.PORT ||  4898;

Server.listen(Port, () => {
    console.log(`🚀 Server running on http://localhost:${Port}`);
})
