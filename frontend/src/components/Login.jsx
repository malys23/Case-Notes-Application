import styles from './Login.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth.js';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate= useNavigate();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCredentials(prev =>({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setLoading(true);

        try{
            await login(credentials);
            navigate('/dashboard');
        }catch(err){
            setError(err.message || 'Invalid email or password')
        }finally{
            setLoading(false);
        }
    };

    return (
        <form className={styles.loginSection} onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <div>
                <label>Email</label>
                <input type='email' name='email' placeholder='Email' value={credentials.email} onChange={handleChange}/>
            </div>
            <div>
                <label>Password</label>
                <input type='password' name='password' value={credentials.password} onChange={handleChange}/>
            </div>
            <p>
                <button type='submit' disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
            </p>
        </form>
    );
};

export default Login;