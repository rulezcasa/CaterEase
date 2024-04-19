import { onAuthStateChanged } from 'firebase/auth';
import { auth, firestore } from '../../firebase/firebase-config';
import React, { useState, useEffect, useContext } from 'react';
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function Authprovider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [caterers, setCaterers] = useState([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            initializeUser(user);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchCaterers = async () => {
            try {
                const caterersCollection = collection(firestore, 'caterers');
                const caterersSnapshot = await getDocs(caterersCollection);
                const fetchedCaterers = caterersSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setCaterers(fetchedCaterers);
            } catch (error) {
                console.error('Error fetching caterers: ', error);
            }
        };

        fetchCaterers();
    }, []);

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({ ...user });
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const addToCart = async (item) => {
        try {
            const currentUserUID = currentUser.uid;
            const dataRef = doc(firestore, 'carts', currentUserUID);
            const userCartSnapshot = await getDoc(dataRef);
            let cartItems = [];

            if (userCartSnapshot.exists()) {
                cartItems = userCartSnapshot.data().items || [];
            } else {
                await setDoc(dataRef, { items: [] });
            }

            const newItem = {
                meal_id: item.idMeal,
                meal_name: item.strMeal,
            };

            cartItems.push(newItem);
            await setDoc(dataRef, { items: cartItems }, { merge: true });
            setCartItems(cartItems);
            console.log(`Added ${item.strMeal} to cart`);
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const removeFromCart = async (itemId) => {
        try {
            const currentUserUID = currentUser.uid;
            const dataRef = doc(firestore, 'carts', currentUserUID);
            const userCartSnapshot = await getDoc(dataRef);
            if (userCartSnapshot.exists) {
                let cartItems = userCartSnapshot.data().items || [];
                cartItems = cartItems.filter((item) => item.meal_id !== itemId);
                await setDoc(dataRef, { items: cartItems }, { merge: true });
                setCartItems(cartItems);
                console.log(`Removed item with ID ${itemId} from cart`);
            }
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    const value = {
        currentUser,
        userLoggedIn,
        loading,
        cartItems,
        caterers,
        addToCart,
        removeFromCart,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
