import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { FaUserAlt } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import { BsCheckLg } from "react-icons/bs";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const { user, logout, loading } = useContext(AuthContext);
    // console.log(user);

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
                {loading ? (
                    <div className="loading loading-bars"></div>
                ) : user ? (
                    <img
                        className="w-16 h-16 rounded-full"
                        src={user.photoURL}
                        alt=""
                        title={user.displayName}
                    />
                ) : (
                    <FaUserAlt className="mt-4" />
                )}

                {
                    user ? (<Link to="/home"><button onClick={logout} className="btn btn-outline btn-info">Logout</button></Link>)
                        :
                        (<Link to="/login"><button className="btn btn-outline btn-info">Login</button></Link>)

                }
                

            </div>

        </div>
    );
};

export default Header;