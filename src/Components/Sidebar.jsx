// Sidebar.jsx
import React from 'react';
import Menu from './Menu';
import Cart from './Cart';
import "./Index.css"

const Sidebar = ({ drawerZIndex }) => {
    return (
        <div  id="sidebar" className="d-flex justify-content-between align-items-center flex-column flex-shrink-0 border p-3 pt-0 text-white bg-white " 
            style={{ width: "90px", height: "100vh", overflow: "hidden", zIndex: drawerZIndex }}>
            <a href="/" className="mx-2">
                <svg width="40" height="32">
                </svg>
                <span>
                    <img src='https://xstore.b-cdn.net/elementor/demos/minimal/wp-content/uploads/sites/27/2017/04/logo.png' alt='logo' />
                </span>
            </a>
            <Menu />
            <Cart />
        </div>
    );
}

export default Sidebar;
