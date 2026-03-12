import styles from './Login.module.css'

const Login = () => {
    return (
        <section className={styles.loginSection}>
            <h2>Login</h2>
            <div>
                <label>Email</label>
                <input type='text' placeholder='Email'/>
            </div>
            <div>
                <label>Password</label>
                <input type='password'/>
            </div>
            <p>
                <button>Login</button>
            </p>
        </section>
    );
};

export default Login;