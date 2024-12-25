import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Authprovider";



const Navbar = () => {

    const {user} = useContext(AuthContext);
    return (
        <div className="space-x-4">

            <NavLink to="/home">Home</NavLink>
            <NavLink to="/allartifacts">All Artifacts</NavLink>
            {
                user &&  <NavLink to="/addartifacts">Add Artifacts</NavLink>
            }
            {
                user && <NavLink to="/liked-artifacts">Liked Artifact</NavLink>
            }
               
           
            
            
            
        </div>
    );
};

export default Navbar;