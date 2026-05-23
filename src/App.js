import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import MesasEscritorios from './pages/MesasEscritorios';
import Sillas from './pages/Sillas';
import ArticulosDecorativos from './pages/ArticulosDecorativos';
import LoginPage from './pages/LoginPage';
import './styles/global.css';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            setUser(JSON.parse(currentUser));
        }
    }, []);

    const handleLogin = (userData) => {
        setUser(userData);
    };

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        setUser(null);
    };

    if (!user) {
        return <LoginPage onLogin={handleLogin} />;
    }

    return (
        <Router>
            <Menu user={user} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/mesas-escritorios" element={<MesasEscritorios />} />
                <Route path="/sillas" element={<Sillas />} />
                <Route path="/articulos-decorativos" element={<ArticulosDecorativos />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;