import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

function Menu({ user, onLogout }) {
    const [menuActive, setMenuActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Buscando: ${searchTerm}`);
    };

    return (
        <div className="menu">
            <div className="menu-header">
                <div className="menu-header-left">
                    <h3>MOBIO</h3>
                    <button className="menu-btn" onClick={toggleMenu}>☰</button>
                </div>
                <div className="menu-header-right">
                    <div className="cart-icon-mobile">🛒</div>
                </div>
            </div>
            <ul id="menu-list" className={menuActive ? 'active' : ''}>
                <li><Link to="/" onClick={() => setMenuActive(false)}>Inicio</Link></li>
                <li><Link to="/mesas-escritorios" onClick={() => setMenuActive(false)}>Mesas y Escritorios</Link></li>
                <li><Link to="/sillas" onClick={() => setMenuActive(false)}>Sillas</Link></li>
                <li><Link to="/articulos-decorativos" onClick={() => setMenuActive(false)}>Artículos adicionales</Link></li>
                <li>
                    <form className="search-form" onSubmit={handleSearch}>
                        <input 
                            type="search" 
                            placeholder="Buscar" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">🔍</button>
                    </form>
                </li>
            </ul>
            <CartIcon />
            
            {user && (
                <div className="cerrar-sesion-container" style={{ top: '85px', right: '50px' }}>
                    <span className="user-nombre">👤 {user.nombre} {user.apellidos}</span>
                    <button className="cerrar-sesion-link" onClick={onLogout}>Cerrar Sesión</button>
                </div>
            )}
        </div>
    );
}

export default Menu;