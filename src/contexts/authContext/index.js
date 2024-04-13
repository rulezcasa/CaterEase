import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase-config';
import React, { useState, useEffect, useContext } from 'react';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function Authprovider({ children }) {
    const [currentUser, setCurrentUser] = useState(null); //logged in user
    const [userLoggedIn, setUserLoggedIn] = useState(false); 
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            initializeUser(user);
        });
        return () => unsubscribe(); // Cleanup function
    }, []);

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({...user});
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }
    function addToCart(item) {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
    }

    function removeFromCart(itemId) {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item.id !== itemId)
        );
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading,
        cartItems,
        addToCart,
        removeFromCart,
    };

    return (
        React.createElement(AuthContext.Provider, { value: value }, 
            !loading && children
        )
    );
}
