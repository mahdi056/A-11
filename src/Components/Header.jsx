import { useState } from "react";
import Navbar from "./Navbar";
import { FaUserAlt } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);  
    };

    return (
        <div className="mt-4 w-4/5 flex justify-between mx-auto">

            <div className="text-2xl font-bold text-blue-500 hidden md:block">
                Artifact Atlas
            </div>

            <div className="md:hidden" >
                <FiAlignJustify onClick={toggleMenu} className="cursor-pointer text-sm"></FiAlignJustify>
            </div>



            <div className={`${menuOpen ? 'flex flex-col' : 'hidden'} md:block`}>
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