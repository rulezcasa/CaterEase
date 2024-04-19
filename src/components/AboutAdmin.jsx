import aboutImage from "../assets/images/about-image.jpeg";
import { Link } from "react-router-dom";
import menu from '../assets/icons/menu.svg';

export const AboutAdmin = () => {
    return (
        <div className="bg-gray-100 w-full grid justify-center content-center">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="flex items-start">
            <Link to="/register"><div className="w-fit rounded-[25px] bg-white p-8 aspect mr-8">
                    <div className="my-2">
                        <h2 className="text-4xl font-bold"><span>Add users</span></h2>
                    </div>
                </div></Link>
                <Link to="/menu"><div className="w-fit rounded-[25px] bg-white p-8 aspect mr-8">
                    <div className="my-2">
                        <h2 className="text-4xl font-bold"><span>View menu</span></h2>
                    </div>
                </div></Link>
                <Link to="/caterers"><div className="w-fit rounded-[25px] bg-white p-8 aspect mr-8">
                    <div className="my-2">
                        <h2 className="text-4xl font-bold"><span>Manage caterers</span></h2>
                    </div>
                </div></Link>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
};
