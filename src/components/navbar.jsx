import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="navbar">
      <div className="logo">
        <h1>Ecommerce</h1>
      </div>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <Link>
          {isAuthenticated ? (
            <Link>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </Link>
          ) : (
            <Link>
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </Link>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
