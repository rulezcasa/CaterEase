import foody from "../assets/images/CaterEase.png";
import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/autho";

export const Header = ({ cartCount }) => {
    
    const navigate = useNavigate();
    const { userLoggedIn, currentUser } = useAuth();
    
    const handleLogout = async () => {
        try {
            await doSignOut(); // Sign out the current user
            // Redirect to home page or any other desired page after logout
            navigate("/login");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    };

    return (
        <nav id="header" className="bg-black text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 ml-0 md:ml-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        <img src={foody} alt="logo" className="w-40 h-40 object-cover"/>
                    </Link>
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10 ml-40">
                    <Link to="/" className="text-xl">Home</Link>
                    <Link to="/Menu" className="text-xl">Menu</Link>
                    <Link to="#about" className="text-xl">About</Link>
                </div>
                <div className="flex items-center justify-center space-x-4 ml-50">
                    {userLoggedIn && ( // Only show cart link if user is logged in
                        <Link to="/cart" className="mr-4 relative">
                            <img src={cartIcon} alt="cart"/>
                            {cartCount > 0 ? <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-1 -right-1">{cartCount}</div> : null}
                        </Link>
                    )}
                    {
                        userLoggedIn ? 
                        <Button onClick={handleLogout}>Log Out</Button> : 
                        (
                            <>
                             <Link to="/login">Log In</Link>
                             <Link to="/register">Sign Up</Link>
                            </>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Header;
