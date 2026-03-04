import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../utils/jwt.js';

const authMiddleware = (req, res, next) => {
    try{
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            return res.status(401).json({ message: 'No token provided'});
        };

        const decoded = verifyToken(token);
        req.user = decoded;
        next();

    }catch(err){
        console.log(err);
        return res.status(401).json({ message: 'Invalid or expired token'});
    };
};

export default authMiddleware;

