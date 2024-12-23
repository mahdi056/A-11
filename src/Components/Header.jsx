import Navbar from "./Navbar";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    return (
        <div className="mt-4 w-4/5 flex justify-between mx-auto">

            <div className="text-2xl font-bold text-blue-500">
                Artifact Atlas
            </div>

            <div>

                <Navbar></Navbar>
            </div>

            <div className="flex gap-x-2">
                <FaUserAlt className="mt-4"></FaUserAlt>
                <button className="btn btn-outline btn-info">Login</button>
            </div>
            
        </div>
    );
};

export default Header;