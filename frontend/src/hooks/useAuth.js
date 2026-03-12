import { useContext } from 'react';
import AuthContext from '../store/authContext';

const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('useAuth mustbe used within the AuthProvider');
    }

    return context;
};

export default useAuth;
