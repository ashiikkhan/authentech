import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import ErrorPage from '../components/ErrorPage';
import Wallet from '../components/Wallet';
import Profile from '../components/Profile';
import Main from '../layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/home', element: <Home></Home> },
      { path: '/profile', element: <Profile></Profile> },
      { path: '/wallet', element: <Wallet></Wallet> },
      { path: '/login', element: <Login></Login> },
      { path: '/register', element: <Register></Register> },
    ],
  },
]);

export default router;
