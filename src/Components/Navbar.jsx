import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="space-x-4">

            <NavLink to="/home">Home</NavLink>
            <NavLink to="/allartifacts">All Artifacts</NavLink>
            <NavLink to="/addartifacts">Add Artifacts</NavLink>
            
            
        </div>
    );
};

export default Navbar;