import React, { useState, useEffect } from 'react';
import { doc, updateDoc, getDoc, deleteDoc } from 'firebase/firestore';
import Button from '../../components/elements/Button';
import { firestore } from '../../firebase/firebase-config';
import { useParams } from 'react-router-dom'; // Import useParams hook
import { useNavigate } from 'react-router-dom';

const UpdateCaterers = () => {
    const navigate=useNavigate();
    
    const { catererId } = useParams(); // Use useParams to get the catererId from URL parameters
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");

    useEffect(() => {
        const fetchCatererDetails = async () => {
            try {
                const catererDoc = await getDoc(doc(firestore, 'caterers', catererId));
                if (catererDoc.exists()) {
                    console.log(catererDoc);
                    const data = catererDoc.data();
                    setName(data.name);
                    setContact(data.contact);
                } else {
                    console.log('Caterer not found!');
                }
            } catch (error) {
                console.error('Error fetching caterer details: ', error);
            }
        };

        fetchCatererDetails();
    }, [catererId]);

    const handleUpdate = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            const catererRef = doc(firestore, 'caterers', catererId);
            await updateDoc(catererRef, {
                name: name,
                contact: contact
            });
            alert('Caterer updated successfully!');
            navigate("/caterers")
        } catch (error) {
            alert('Error updating caterer: ', error);
        }
    };

    const handleDelete= async ()=>{
        try {
            const catererRef = doc(firestore, 'caterers', catererId);
            await deleteDoc(catererRef);
            alert('Caterer deleted successfully!');
            navigate("/caterers");
        } catch (error) {
            alert('Error deleting caterer: ', error);
        }
};

    return (
        <div className="h-screen bg-black flex items-center justify-center mt-5">
            <div className="rounded-lg max-w-lg ml-10 mb-80 w-full flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
                <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
                    <h5 className="text-3xl">Update Caterer Details</h5>
                    <form className="w-full space-y-6" onSubmit={handleUpdate}>
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
                            Update
                        </Button>

                        
                    </form>
                    <br></br>
                    <Button onClick={handleDelete} variant='secondary' size="large" >
                            Delete
                        </Button>
                </div>
            </div>
        </div>
    );
};

export default UpdateCaterers;
