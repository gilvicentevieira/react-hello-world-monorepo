import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contat from './pages/Contact';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  { path: '/', element: <MainLayout />, children: [
      {path: '/', element: <Home/>},
      {path: '/about', element: <About/>},
      {path: '/contact', element: <Contact/>},
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
