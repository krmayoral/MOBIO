import React from 'react';
import '../styles/articulos.css';

function ArticulosDecorativos() {
    const handleAddToCart = (producto) => {
        alert(`Producto agregado al carrito (solo demostración): ${producto}`);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert('Gracias por suscribirte, recibirás nuestras ofertas.');
    };

    const productos = [
        { img: "articulo decorativo 1.jpg", nombre: "Elefantes", precio: "$900.00" },
        { img: "articulo decorativo 2.jpg", nombre: "Tronco con corazones", precio: "$500.00" },
        { img: "articulo decorativo 3.jpg", nombre: "Jarrones de palma", precio: "$1,000.00" },
        { img: "articulo decorativo 4.jpg", nombre: "Loto de cristal", precio: "$1,500.00" },
        { img: "articulo decorativo 5.jpg", nombre: "Perrito Chihuahua", precio: "$1,500.00" }
    ];

    return (
        <div>
            <div id="titulo-articulos">
                <h2>Artículos adicionales</h2>
            </div>
            
            <div className="articulos1">
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
            
            <form className="formulario" onSubmit={handleSubscribe}>
                <input type="email" placeholder="Tu correo electrónico" required />
                <button type="submit">Suscribirse</button>
            </form>
            
            <div className="logo-mobio">
                <div id="logo">
                    <img src="logo MOBIO actualizado .jpg" alt="Logo MOBIO" />
                </div>
                <div id="mobio">
                    <h1>MOBIO</h1>
                </div>
            </div>
        </div>
    );
}

export default ArticulosDecorativos;