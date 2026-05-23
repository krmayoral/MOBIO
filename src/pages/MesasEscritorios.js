import React from 'react';
import '../styles/mesas.css';

function MesasEscritorios() {
    const handleAddToCart = (producto) => {
        alert(`Producto agregado al carrito (solo demostración): ${producto}`);
    };

    const productos = [
        { img: "escritorio 2.jpg", nombre: "Escritorio doble base", precio: "$5,000.00" },
        { img: "escritorio 4.jpg", nombre: "Escritorio básico", precio: "$3,000.00" },
        { img: "escritorio 5.jpg", nombre: "Escritorio blanco", precio: "$4,500.00" },
        { img: "mesa de juntas 1.jpg", nombre: "Mesa de juntas básica", precio: "$12,500.00" },
        { img: "mesa de juntas 2.jpg", nombre: "Mesa redonda pequeña", precio: "$13,500.00" },
        { img: "mesa de juntas 3.jpg", nombre: "Mesa de juntas base reforzada", precio: "$15,500.00" },
        { img: "mesa de juntas 4.jpg", nombre: "Mesa de juntas clásica", precio: "$14,500.00" },
        { img: "mesa de juntas 5.jpg", nombre: "Mesa redonda básica", precio: "$13,000.00" }
    ];

    return (
        <div>
            <div className="contenedor">
                <div id="titulo">
                    <h1>MOBIO</h1>
                </div>
                <div id="logo">
                    <img src="logo MOBIO actualizado .jpg" alt="Logo MOBIO" />
                </div>
            </div>
            
            <div id="eslogan">
                <h2>Tu oficina en todas partes</h2>
            </div>
            
            <div id="mesas-escritorios">
                <h2>Mesas y Escritorios</h2>
            </div>
            
            <div className="mesasescritorios1">
                {productos.map((producto, index) => (
                    <div className="producto" key={index}>
                        <img src={producto.img} alt={producto.nombre} />
                        <p><cite>{producto.nombre} {producto.precio}</cite></p>
                        <button className="btn-carrito" onClick={() => handleAddToCart(producto.nombre)}>
                            Agregar al carrito 🛒
                        </button>
                    </div>
                ))}
            </div>
            
            <div className="whatsApp-informacion">
                <a href="https://wa.me/3319130235" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
                    <img src="whatsApp.jpg" alt="WhatsApp" />
                    <span>Contáctanos en WhatsApp</span>
                </a>
                <div id="productos">
                    <p>En MOBIO utilizamos materiales de alta calidad para la fabricación de muebles.</p>
                    <div className="info-box">
                        <h3>Misión</h3>
                        <p>Ofrecer mobiliario de calidad con diseño y precio competitivo.</p>
                    </div>
                    <div className="info-box">
                        <h3>Visión</h3>
                        <p>Ser una empresa líder en mobiliario en México.</p>
                    </div>
                    <div className="info-box">
                        <h3>Valores</h3>
                        <p>Calidad, Integridad, Compromiso, Responsabilidad y Trabajo en equipo.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MesasEscritorios;