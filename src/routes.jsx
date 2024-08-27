import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/chat-retencao-pme" replace />
    },
    {
        path: '/chat-retencao-pme',
        element: <Home />
    }
]);

export default router;
