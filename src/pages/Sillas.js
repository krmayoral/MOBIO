import React from 'react';
import '../styles/sillas.css';

function Sillas() {
    const handleAddToCart = (producto) => {
        alert(`Producto agregado al carrito (solo demostración): ${producto}`);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert('Gracias por suscribirte, recibirás nuestras ofertas.');
    };

    const productos = [
        { img: "silla 1.jpg", nombre: "Silla negra", precio: "$500.00" },
        { img: "silla 2.jpg", nombre: "Silla acolchonada", precio: "$1,000.00" },
        { img: "silla 3.jpg", nombre: "Silla básica", precio: "$800.00" },
        { img: "silla 4.jpg", nombre: "Silla beige", precio: "$700.00" },
        { img: "silla 5.jpg", nombre: "Silla reclinable", precio: "$2,000.00" }
    ];

    return (
        <div>
            <div id="eslogan">
                <h2>Tu oficina en todas partes</h2>
            </div>
            
            <div id="sillas">
                <h2>Sillas</h2>
            </div>
            
            <a href="https://wa.me/3319130235" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
                <img src="whatsApp.jpg" alt="WhatsApp" />
                <span>Contáctanos en WhatsApp</span>
            </a>
            
            <div className="texto-box">
                <p>En MOBIO sabemos que la imagen de tu empresa es importante, por eso ofrecemos sillas cómodas, modernas y de calidad.</p>
            </div>
            
            <div className="sillas1">
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
            
            <div className="info-container">
                <div className="info-box">
                    <p>Somos fabricantes de mobiliario para oficina y casa con alta calidad.</p>
                </div>
                <div className="info-box">
                    <p>
                        <strong>Filosofía:</strong><br />
                        Brindar calidad, diseño y funcionalidad en cada producto.
                    </p>
                </div>
            </div>
            
            <div className="logo-mobio">
                <div id="logo">
                    <img src="logo MOBIO actualizado .jpg" alt="Logo MOBIO" />
                </div>
                <div id="mobio">
                    <h1>MOBIO</h1>
                </div>
            </div>
            
            <form className="formulario" onSubmit={handleSubscribe}>
                <input type="email" placeholder="Tu correo electrónico" required />
                <button type="submit">Suscribirse</button>
            </form>
        </div>
    );
}

export default Sillas;