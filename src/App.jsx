import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/chat-retencao-pme" replace />} />
                <Route path="/chat-retencao-pme" element={<Home />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
