import { useState, useRef } from "react";
import Button from "../../components/elements/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doSignInWithEmailAndPassword} from "../../firebase/autho";
import { useAuth } from "../../contexts/authContext";

const Login = () => {
    const navigate = useNavigate();

    const { userLoggedIn, currentUser } = useAuth();


    

    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[isSigningIn, setIsSigningIn]=useState(false)
    const[errorMessage, setErrorMessage]=useState('')

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
                setIsSigningIn(false);
                alert('Sign in successfull!');
                navigate("/")
              
            } catch (error) {
                // Check if the error is due to invalid credentials
                if (error.code === 'auth/invalid-login-credentials' || error.code === 'auth/user-not-found') {
                    alert('Invalid email or password. Please try again.');
                } else {
                    // Handle other types of errors
                    console.error('Error signing in:', error.message);
                }
                setIsSigningIn(false); // Reset the signing in state
            }
        }
    }


    return (
        <div className="h-screen bg-black flex items-center justify-center">
            <div className="rounded-lg max-w-lg ml-10 mb-80 w-full flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
                <h1 className="block text-lg font-large text-gray-200">Login</h1>
                <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
                <form className="w-full space-y-6" onSubmit={onSubmit}>
                    <div>
                        <label 
                        htmlFor="email"
                        className="block text-lg font-medium text-gray-200">Email</label>
                        <input 
                        id="email"
                        type="email"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label 
                        htmlFor="password"
                        className="block text-lg font-medium text-gray-200">Password</label>
                        <input 
                        id="password"
                        type="password"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <Button size="large">{isSigningIn ? "Signing In..." : "Sign In"}</Button>
                </form>
                <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default Login;