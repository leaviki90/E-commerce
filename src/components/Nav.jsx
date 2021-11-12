
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Cart from './Cart';

import './Nav.css'

const Nav = ({cart, setCart}) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <nav className="nav">
            <h1 className="nav-logo">
                <Link to="/">
                    Logo

                </Link>
            </h1>
           <div>
               <img src="/shopping-cart.png" alt="shopping-cart" className="shopping-cart"/>
               <span onClick={() => setShowModal(true)}>
             
             ({cart.length})
         </span>
         {showModal && 
         <Modal
             showModal={setShowModal}
         >
             <Cart 
                 cart={cart}
                 setCart={setCart}
             />
         </Modal>}
           </div>
        </nav>
    );
}

export default Nav;