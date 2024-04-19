import { useState } from "react";
import Button from "../../components/elements/Button";
import { doCreateUserWithEmailAndPassword } from "../../firebase/autho";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth} from "firebase/auth";
import { updateProfile } from "firebase/auth";


const Register = () => {
  
  const navigate = useNavigate();

  const auth = getAuth();

  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [meal, setMeal] = useState("");
  const [allergies, setAllergies] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningUp) {
      setIsSigningUp(true);
      try {
        await doCreateUserWithEmailAndPassword(email, password, role);
        alert("Sign-up successful!"); // Alert after signing in successfully
        setIsSigningUp(false);
        navigate("/register");
      } catch (error) {
        console.error("Error signing in:", error.message);
      }
    }

  };

  return (
    <div className="h-screen bg-black flex items-center justify-center mt-5">
      <div className="rounded-lg max-w-lg ml-10 mb-80 w-full flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
        <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
          <h5 className="text-3xl">Login</h5>
          <form className="w-full space-y-6" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="role"
                className="block text-lg font-medium text-gray-200"
              >
                Role
              </label>
              <select
                id="role"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-200"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-200"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-gray-200"
              >
                Phone
              </label>
              <input
                id="phone"
                type="text"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="meal"
                className="block text-lg font-medium text-gray-200"
              >
                Meal preference
              </label>
              <input
                id="meal"
                type="text"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                onChange={(e) => setMeal(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="allergies"
                className="block text-lg font-medium text-gray-200"
              >
                Allergies-if any
              </label>
              <input
                id="allergies"
                type="text"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                onChange={(e) => setAllergies(e.target.value)}
              />
            </div>
            
            <Button size="large">
              {isSigningUp ? "Signing up..." : "Register"}
            </Button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
