import { Banner } from "../../components/Banner";
import { About } from "../../components/About";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { BannerAdmin } from "../../components/BannerAdmin";
import { AboutAdmin } from "../../components/AboutAdmin";



const Home = () => {

    const navigate = useNavigate();

    const { userLoggedIn, currentUser } = useAuth();
    
    return (
        <>
            {currentUser && currentUser.displayName === "user" && (
                <>
                    <Banner />
                    <About />
                </>
            )}
            {currentUser && currentUser.displayName === "admin" && (
                <>
                    <BannerAdmin />
                    <AboutAdmin />
                </>
            )}
            {/* Default components if user role is neither "user" nor "admin" */}
            {(!currentUser || (currentUser && currentUser.displayName !== "user" && currentUser.displayName !== "admin")) && (
                <>
                    <Banner />
                    <About />
                </>
            )}
        </>
    );
}

export default Home;