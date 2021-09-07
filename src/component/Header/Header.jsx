import React from "react";


function Header() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="d-flex px-3 ">
                <i className="bi bi-square-fill mt-2" fill="currentColor"></i>
                <h3 className="px-2">React Shop</h3>
            </div>

        </nav>
    );
}

export default Header;