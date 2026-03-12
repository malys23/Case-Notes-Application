import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

import RootLayout from './pages/Root';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import NotFoundPage from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './pages/DashboardLayout';
import DashboardPage from './pages/Dashboard';
import MyCasesPage from './pages/MyCases';
import CaseDetailPage from './pages/CaseDetail';
import NewCasePage from './pages/NewCase';
import EditCasePage from './pages/EditCase';

const router = createBrowserRouter([
  {path: '/',
   element: <RootLayout />,
   errorElement: <NotFoundPage/>,
   children: [
    { index: true, element: <LoginPage />},
    { path: '/register', element: <RegisterPage/>},
    { path: '/dashboard', 
      element:
        <ProtectedRoute>
          <DashboardLayout/>
        </ProtectedRoute>,
      children: [
        { index: true, element: <DashboardPage/>},
        { path: 'mycases', element: <MyCasesPage/>},
        { path: ':caseId',
          id: 'case-detail',
          children: [
            {index: true, element: <CaseDetailPage/>},
            {path: 'edit', element: <EditCasePage />}
          ]},
        { path: 'new', element: <NewCasePage/>}
      ]
    }
   ], 
  },
]);

function App(){
  return <RouterProvider router={router}/>;
}

export default App
