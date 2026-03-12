import Login from '../components/Login';
import styles from './Login.module.css';

const LoginPage = () => {
    return (
        <div className={styles.mainPage}>
            <section className={styles.intro}>
                <div>
                    <h1> Welcome to Case Notes</h1>
                    <p>This application works to create case notes for your cases where you can add your clients to stay in the loop.</p>
                </div>
            </section>
            <section className={styles.login}>
                <Login />                
            </section>
        </div>
    );
};

export default LoginPage;