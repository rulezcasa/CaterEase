import React from 'react';
import { useAuth } from '../../contexts/authContext';
import Button from '../../components/elements/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Cart = () => {
    
    const navigate=useNavigate();
    const { cartItems, removeFromCart } = useAuth();

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
    };




    return (
        <div className="bg-white p-4 rounded shadow">
            <h1 className="font-bold text-center text-3xl">Cart Items</h1>
            <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                    <li key={item.id} className="flex items-center justify-between py-2">
                        <span className="text-lg">{item.meal_name}</span>
                        <button
                            onClick={() => handleRemoveFromCart(item.meal_id)}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <br></br>
            <div className="flex justify-center mt-4">
                <Link to='/invoice'><Button className="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400">
                    Check out
                </Button></Link>
            </div>
        </div>
    );
};

export default Cart;
