import Button from "./elements/Button";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

export const BannerAdmin = () => {
  const { userLoggedIn, currentUser } = useAuth();
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    // If user is logged in, navigate to menu, else navigate to login
    if (userLoggedIn) {
      navigate("/menu");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center justify-center">
      <div className="banner-description w-full md:w-1/2 p-3 text-center">
        <p className="font-semibold text-lg text-red-600 py-2 mb-3">
          {userLoggedIn && <>Welcome {currentUser.displayName},</>}
        </p>
        <h2 className="mb-6 text-4xl font-bold text-white">
          Dashboard
        </h2>
      </div>
    </div>
  );
};
