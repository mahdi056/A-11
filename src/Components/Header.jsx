import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { FaUserAlt } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import { BsCheckLg } from "react-icons/bs";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const togglenav = () => setShowMenu((prev) => !prev);

    const { user, logout, loading } = useContext(AuthContext);
    // console.log(user);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="mt-4 flex justify-between items-center mx-auto bg-white shadow-md py-2 px-4 sticky top-0 z-10">

            <div className="text-2xl font-bold text-blue-500 hidden md:block">
                Artifact Atlas
            </div>

            <div className="md:hidden" >
                <FiAlignJustify onClick={toggleMenu} className="cursor-pointer text-sm"></FiAlignJustify>

            </div>



            {/* <div className={`${menuOpen ? 'flex border-2 lg:border-0' : 'hidden'} md:block`}>
                <Navbar className='sticky top-0'></Navbar>
            </div> */}

            <div className={`${menuOpen ? 'flex border-2 lg:border-0' : 'hidden md:block'}`}>
            
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

                {user ? (
                    <div className="relative flex flex-col">
                        <button
                            className="btn btn-outline btn-info w-20"
                            onClick={togglenav}
                        >
                            My Profile
                        </button>
                        {showMenu && (
                            <div className="absolute top-10 left-0 bg-white shadow-md rounded p-2 flex flex-col gap-y-2">
                                <Link to="/my-artifacts">
                                    <button className="btn btn-outline btn-info">
                                        My Artifacts
                                    </button>
                                </Link>
                                <Link to="/liked-artifacts">
                                    <button className="btn btn-outline btn-info">
                                        Liked Artifacts
                                    </button>
                                </Link>
                            </div>
                        )}
                        <Link to="/home">
                            <button
                                onClick={logout}
                                className="btn btn-outline btn-info w-20 mt-2"
                            >
                                Logout
                            </button>
                        </Link>
                    </div>
                ) : (
                    <Link to="/login">
                        <button className="btn btn-outline btn-info">Login</button>
                    </Link>
                )}


            </div>

        </div>
    );
};

export default Header;
