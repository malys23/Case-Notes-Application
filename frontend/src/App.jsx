import { AuthProvider } from './store/authContext';
import { BrowserRouter } from 'react-router-dom';

import { LoginPage } from './pages/Login';


import './App.css'

function App() {
  return (
    <AuthProvider>
      <BrowserRoutes>
        <Routes>
          
        </Routes>
      </BrowserRoutes>
    </AuthProvider>
  );
}

export default App
