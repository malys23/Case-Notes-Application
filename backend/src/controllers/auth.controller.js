import { generateToken } from '../utils/jwt.js';
import { hashPassword, comparePassword } from '../utils/bcrypt.js';
import { createUser, findUserByEmail, updateLastLogin } from '../models/user.models.js';

export const register = async(req, res) => {
    try{
        const {firstName, lastName, email, dob, password, role} = req.body;

        const existingUser = findUserByEmail(email);
        if(existingUser){
            return res.status(400).json({message: 'User with this email already exists'});
        };

        const passwordHash = hashPassword(password);
        const newUser = createUser(firstName, lastName, email, dob, passwordHash, role);

        res.status(201).message({ message: 'User succesfully created'});

    }catch(err){
        if(err.code === '23505'){
            if(err.constraint === 'users_email_key'){
                return res.status(400).json({message: 'Email already in use'});
            }
        }
        console.log(err);
        return res.status(500).json({ message: 'Error creating user'});
    };
}; 

export const login = async(req, res) => {
    try{
        const { email, password } = req.body;

        const user = finduserByEmail(email);
        if(!user){
            console.log('No user found with that email');
            return res.status(401).json({ message: 'Invalid email or password'});
        }

        const passwordMatch = comparePassword(password, user.password);
        if(!passwordMatch){
            return res.status(401).json({message: 'Invalid email or password'});
        }

        await updateLastLogin(user.user_id);

        const token = generateToken({
            user_id: user.user_id,
            email: user.email
        });

        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                user_id: user.user_id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                dob: user.dob,
                role: user.role,
            }
        });

    }catch(err){
        console.log(err);
        return res.status(500).json({ message: 'Error loggin in'});
    };
};