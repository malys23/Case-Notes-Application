import Login from '../components/Login';

const LoginPage = () => {
    return (
        <>
            <section>
                <div>
                    <h1> Welcome to Case Notes</h1>
                    <p>This application works to create case notes for your cases where you can add your clients to stay in the loop.</p>
                </div>
            </section>
            <Login />
        </>
    );
};

export default LoginPage;