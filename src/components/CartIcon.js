import React, { useState } from 'react';

function CartIcon() {
    const [cartCount, setCartCount] = useState(0);

    return (
        <div className="cart-icon">
            <span>🛒</span>
            <span className="cart-count">{cartCount}</span>
        </div>
    );
}

export default CartIcon;