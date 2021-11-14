
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Cart from './Cart';
import './Nav.css'

const Nav = ({cart, setCart, showBadge}) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <nav className="nav">
            <h1 className="nav-logo">
                <Link to="/">
                Store
                </Link>
            </h1>
            <div id="cartBtn" onClick={() => setShowModal(true)}>
                <div className={`${showBadge ? "show" : ""} cart-badge`}>
                    <span>Item(s) added</span>
                </div>
                <img
                    src="/shopping-cart.png"
                    alt="shopping-cart"
                    className="shopping-cart"
                    style={
                        cart.length < 1 ? {filter: "grayscale(1)"} : null
                    }
                    />
                {cart.length ? <span className="count-badge">
                    {cart.length}
                </span>
                :
                ''
                }
            </div>
            {showModal &&
                <Modal
                    showModal={setShowModal}
                    modalTitle="Cart"
                >
                    <Cart
                        cart={cart}
                        setCart={setCart}
                    />
                </Modal>}
        </nav>
    );
}

export default Nav;