import { useEffect, useReducer } from 'react';
import { login as loginService, logout as logoutService } from '../services/authService';
import AuthContext from './authContext';

const initialState = {
    user: null,
    token: null,
    loading: true
};

const authReducer = (state, action) => {
    if(action.type === 'INITIALIZE'){
        return{
            ...state,
            user: action.payload.user,
            token: action.payload.token,
            loading: false
        };
    }
    
    if(action.type === 'LOGIN'){
        return{
            ...state,
            user: action.payload.user,
            token: action.payload.token,
            loading: false
        };
    }

    if(action.type === 'LOGOUT'){
        return{
            ...state,
            user: null,
            token: null,
            loading: false
        };
    };

    if(action.type === 'SET_LOADING'){
        return{
            ...state,
            loading: action.payload
        };
    };

    return state;
};

const AuthProvider = ({ children }) => {
    const [ authState, authDispatch] = useReducer(authReducer, initialState);

    //check if user logged in already
    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');

        if(savedToken && savedUser){
            authDispatch({
                type: 'INITIALIZE',
                payload: {
                    user: JSON.parse(savedUser),
                    token: savedToken
                }
            });
        } else {
            authDispatch({
                type: 'SET_LOADING',
                payload: false
            });
        }
    }, []);

    const login = async (credentials) => {
        const data = await loginService(credentials);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        authDispatch({
            type: 'LOGIN',
            payload: {
                user: data.user,
                token: data.token
            }
        });
    }

    const logout = () => {
        logoutService();
        localStorage.removeItem('user');
        authDispatch({type: 'LOGOUT'});
    };

    return(
        <AuthContext.Provider value={{user: authState.user, token: authState.token, loading: authState.loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;