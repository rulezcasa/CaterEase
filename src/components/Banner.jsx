import Button from "./elements/Button";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

export const Banner = () => {
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
    <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
      <div className="banner-deescription w-full md:w-1/2 p-3 mt-24">
        <p className="font-semibold text-lg text-red-600 py-2 mb-3">
          {userLoggedIn && <>Welcome {currentUser.displayName},</>}
        </p>
        <h2 className="mb-6 text-4xl font-bold text-white mr-10">
          Culinary excellence, delivered digitally!
        </h2>
        <p className="font-semibold text-lg text-red-600 py-2 ml-10">
          Grab your healthy meal now..
        </p>
        <br></br>
        <div className="btn-container ml-20">
          <Button onClick={handleButtonClick}>Order Now</Button>
        </div>
      </div>
      <div className="banner-image w-full md:w-1/2 p-10 flex justify-end">
        <img
          src={require("../assets/images/banner.jpeg")}
          alt="banner"
          className="max-h-95"
        />
      </div>
    </div>
  );
};
