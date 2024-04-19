import React, { useState, useEffect } from 'react';
import { doc, updateDoc, getDoc, deleteDoc, addDoc, collection } from 'firebase/firestore';
import Button from '../../components/elements/Button';
import { firestore } from '../../firebase/firebase-config';
import { useParams } from 'react-router-dom'; // Import useParams hook
import { useNavigate } from 'react-router-dom';

const Addcat= () => {
    const navigate=useNavigate();
    
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");

    const handleAdd = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            // Add the caterer to Firestore
            const catererRef = collection(firestore, 'caterers');
            await addDoc(catererRef, {
                name: name,
                contact: contact
            });
            alert('Caterer added successfully!');
            // Redirect to caterers list or any other page
            navigate("/caterers");
        } catch (error) {
            console.error('Error adding caterer: ', error);
            alert('Error adding caterer: ', error.message);
        }
    };
    


    return (
        <div className="h-screen bg-black flex items-center justify-center mt-5">
            <div className="rounded-lg max-w-lg ml-10 mb-80 w-full flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
                <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
                    <h5 className="text-3xl">Update Caterer Details</h5>
                    <form className="w-full space-y-6" onSubmit={handleAdd}>
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium text-gray-200">
                                Name
                            </label>
                            <input
                                id="name"
                                type="name"
                                value={name}
                                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="contact" className="block text-lg font-medium text-gray-200">
                                Contact
                            </label>
                            <input
                                id="contact"
                                type="text"
                                value={contact}
                                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </div>

                        <Button size="large" type="submit">
                            Add
                        </Button>

                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Addcat;
