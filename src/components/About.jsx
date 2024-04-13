import aboutImage from "../assets/images/about-image.jpeg";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">Welcome to CaterEase</h2>
                    <br></br>
                    <p className="text-lg"> 
                    Welcome to our digital cafeteria platform – where convenience meets nutrition! Skip your lunch queues with hassle-free meal preordering. 
                    Explore our dynamic menus, place an order and pick it up from your workplace's cafeteria.
                    Track your calories with detailed nutritional info for every dish. From hearty salads to savory sandwiches, there's something for every taste. 
                    Revolutionize your lunch routine today!!
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}