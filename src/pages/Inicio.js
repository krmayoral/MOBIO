import React, { useState } from 'react';
import '../styles/inicio.css';

function Inicio() {
    const [chatOpen, setChatOpen] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [mensajes, setMensajes] = useState([
        { tipo: 'bot', texto: '¡Hola! ¿En qué podemos ayudarte?' }
    ]);

    const handleContactSubmit = (e) => {
        e.preventDefault();
        alert('Gracias por contactarnos, te responderemos pronto.');
    };

    const handleAddToCart = (producto) => {
        alert(`Producto agregado al carrito (solo demostración): ${producto}`);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (mensaje.trim() === '') return;

        // Agregar mensaje del usuario
        setMensajes([...mensajes, { tipo: 'user', texto: mensaje }]);
        
        // Respuesta del bot
        setTimeout(() => {
            let respuesta = 'Gracias por tu mensaje. Un asesor te contactará pronto por WhatsApp.';
            if (mensaje.toLowerCase().includes('precio')) {
                respuesta = 'Los precios varían según el producto. Te invitamos a revisar nuestro catálogo.';
            } else if (mensaje.toLowerCase().includes('envío')) {
                respuesta = 'Realizamos envíos a diferentes ciudades de México. El tiempo de entrega es de 3 a 7 días hábiles.';
            } else if (mensaje.toLowerCase().includes('garantía')) {
                respuesta = 'Todos nuestros productos cuentan con garantía por defectos de fabricación.';
            }
            setMensajes(prev => [...prev, { tipo: 'bot', texto: respuesta }]);
        }, 500);
        
        setMensaje('');
    };

    return (
        <div>
            <div className="contenedor1">
                <div id="logo">
                    <img src="/logo MOBIO actualizado .jpg" alt="Logo MOBIO" />
                </div>
                <div id="titulo">
                    <h1>MOBIO</h1>
                </div>
                <div className="botones-container">
                    <a href="https://wa.me/3319130235" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
                        <img src="/whatsApp.jpg" alt="WhatsApp" />
                        <span>Contáctanos en WhatsApp</span>
                    </a>
                    <a href="https://www.facebook.com/tu-pagina" target="_blank" rel="noopener noreferrer" className="facebook-button">
                        <img src="/facebook.jpeg" alt="Facebook" />
                        <span>Síguenos en Facebook</span>
                    </a>
                </div>
            </div>
            
            <div id="eslogan">
                <h2>Tu oficina en todas partes</h2>
            </div>
            
            <div id="ofertas">
                <h3>Ofertas</h3>
            </div>
            
            <div className="ofertasprimeras">
                <div className="producto">
                    <img src="/escritorio 3.jpg" alt="Escritorio cafe" />
                    <p><cite>Escritorio cafe $2,000.00</cite></p>
                    <button className="btn-carrito" onClick={() => handleAddToCart('Escritorio cafe')}>
                        Agregar al carrito
                    </button>
                </div>
                <div className="producto">
                    <img src="/escritorio 1.jpg" alt="Escritorio" />
                    <p><cite>Escritorio negro $2,500.00</cite></p>
                    <button className="btn-carrito" onClick={() => handleAddToCart('Escritorio negro')}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
            
            <div id="pagos">
                <img src="/pagos y horarios.jpg" alt="Pagos" />
            </div>
            
            <div className="informacion-fomulario">
                <div className="formulario">
                    <h3>Contáctanos</h3>
                    <form onSubmit={handleContactSubmit}>
                        <label>Nombre:</label>
                        <input type="text" required />
                        
                        <label>Muebles de interés</label>
                        <select>
                            <option>Mesas y escritorios</option>
                            <option>Sillas</option>
                            <option>Artículos adicionales</option>
                        </select>
                        
                        <label>Correo:</label>
                        <input type="email" required />
                        
                        <label>Teléfono:</label>
                        <input type="text" />
                        
                        <label>Mensaje:</label>
                        <input type="text" />
                        
                        <button type="submit">Enviar</button>
                    </form>
                </div>
                <div className="info-container">
                    <div className="info-box">
                        <p>
                            Somos una empresa 100% mexicana nacida en Guadalajara, Jalisco. Desde hace más de 5 años mantenemos el compromiso de ofrecer el más alto nivel de servicio y productos de calidad a nuestros clientes. Nuestro catálogo cuenta con productos para oficina y hogar listos para enviar hoy mismo. Los productos de la marca MOBIO combinan la mejor calidad con el mejor precio. Nuestro equipo busca siempre productos modernos y funcionales para todos nuestros clientes.
                        </p>
                    </div>
                    <div className="info-box">
                        <p>
                            Estamos ubicados en Av. Chapultepec #145 Colonia Americana, a una cuadra de la glorieta de los Niños Héroes. Ven y conócenos, tenemos muchas ofertas para ti.
                        </p>
                    </div>
                </div>
            </div>

            
            <button className="chat-btn" onClick={() => setChatOpen(!chatOpen)}>
                💬
            </button>

            
            {chatOpen && (
                <div className="chat-ventana">
                    <div className="chat-header">
                        <span>💬 Atención al cliente</span>
                        <button className="chat-close" onClick={() => setChatOpen(false)}>✕</button>
                    </div>
                    <div className="chat-mensajes">
                        {mensajes.map((msg, index) => (
                            <div key={index} className={`chat-mensaje ${msg.tipo}`}>
                                <strong>{msg.tipo === 'bot' ? 'MOBIO' : 'Tú'}:</strong> {msg.texto}
                            </div>
                        ))}
                    </div>
                    <form className="chat-form" onSubmit={handleSendMessage}>
                        <input 
                            type="text" 
                            placeholder="Escribe tu mensaje..." 
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                        />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Inicio;