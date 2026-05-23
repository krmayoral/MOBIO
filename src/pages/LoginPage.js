import React, { useState } from 'react';

function LoginPage({ onLogin }) {
    const [isLogin, setIsLogin] = useState(true);
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.correo === correo && u.password === password);
        
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            onLogin(user);
        } else {
            setError('Correo o contraseña incorrectos');
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (!correo || !password || !nombre || !apellidos) {
            setError('Completa todos los campos');
            return;
        }
        
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.find(u => u.correo === correo)) {
            setError('El correo ya está registrado');
            return;
        }
        
        const newUser = { correo, password, nombre, apellidos };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        onLogin(newUser);
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
        }}>
            <div style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '30px',
                maxWidth: '400px',
                width: '100%',
                padding: '40px',
                border: '1px solid rgba(255,89,0,0.3)'
            }}>
                <h1 style={{ color: 'orange', textAlign: 'center', fontSize: '3rem', marginBottom: '30px' }}>MOBIO</h1>
                
                <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', borderBottom: '2px solid rgba(255,255,255,0.2)' }}>
                    <button onClick={() => { setIsLogin(true); setError(''); }} style={{
                        flex: 1,
                        padding: '12px',
                        background: 'none',
                        border: 'none',
                        color: isLogin ? 'orange' : 'rgba(255,255,255,0.6)',
                        borderBottom: isLogin ? '2px solid orange' : 'none',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}>LOGIN</button>
                    <button onClick={() => { setIsLogin(false); setError(''); }} style={{
                        flex: 1,
                        padding: '12px',
                        background: 'none',
                        border: 'none',
                        color: !isLogin ? 'orange' : 'rgba(255,255,255,0.6)',
                        borderBottom: !isLogin ? '2px solid orange' : 'none',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}>REGISTRARSE</button>
                </div>
                
                {error && <div style={{ backgroundColor: 'rgba(244,67,54,0.2)', color: '#ff6b6b', padding: '10px', borderRadius: '10px', textAlign: 'center', marginBottom: '20px' }}>{error}</div>}
                
                {isLogin ? (
                    <form onSubmit={handleLogin}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ color: 'white', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>CORREO</label>
                            <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', fontSize: '1rem' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ color: 'white', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>CONTRASEÑA</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', fontSize: '1rem' }} />
                        </div>
                        <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: 'rgba(255,89,0,0.986)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>ENTRAR</button>
                    </form>
                ) : (
                    <form onSubmit={handleRegister}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ color: 'white', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>NOMBRE</label>
                            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', fontSize: '1rem' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ color: 'white', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>APELLIDOS</label>
                            <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} required style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', fontSize: '1rem' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ color: 'white', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>CORREO</label>
                            <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', fontSize: '1rem' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ color: 'white', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>CONTRASEÑA</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', fontSize: '1rem' }} />
                        </div>
                        <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: 'rgba(255,89,0,0.986)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>GUARDAR</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default LoginPage;