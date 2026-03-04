import 'dotenv/config';
import express from 'express';
import cors from 'cors';

//import routes
import authRoutes from '/src/routes/auth.routes.js'; 

//Start express
const app = express();

//Middleware
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(express.json());

//Routes
app.use('/api/auth', authRoutes);

//Health check for APIs
app.get('/', (req, res)=>{
    res.json({message: 'API is running'});
});

//Global error handler
app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(500).json({message: 'Something went wrong'});
});

//Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
});