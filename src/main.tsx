import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './App.tsx';
import HomePage from './pages/Home.tsx';
import DetailPage from "./pages/Detail.tsx";

/*
 * Init app router and define app routes
 */
const router = createBrowserRouter([
    {path: '/',
        element: <App />,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'details/:country',element: <DetailPage/>}
        ]},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);