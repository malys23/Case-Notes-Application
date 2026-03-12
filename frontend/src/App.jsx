import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Dashboard from './pages/Dashboard';
import AuthProvider from './store/authProvider';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>

          <Route path='/' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App
