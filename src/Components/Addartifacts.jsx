
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "./Authprovider";
import { getAuth } from "firebase/auth";

const AddArtifact = () => {

    const { user } = useContext(AuthContext);
    const auth = getAuth();
    const userid = auth.currentUser.uid;
    
    // console.log(userid);

    const [formData, setFormData] = useState({

        name: "",
        image: "",
        type: "",
        historicalContext: "",
        createdAt: "",
        discoveredAt: "",
        discoveredBy: "",
        presentLocation: "",
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            toast.error("You must be logged in to add an artifact.");
            return;
          }
          

        const artifactData = { ...formData, userId: userid }; 
      
        const response = await fetch("https://a-11-server-site.vercel.app/add-artifact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(artifactData),
        });

        if (response.ok) {
            toast.success("Artifact added successfully!",{
                position: "top-center"
            });
            setFormData({
                name: "",
                image: "",
                type: "",
                historicalContext: "",
                createdAt: "",
                discoveredAt: "",
                discoveredBy: "",
                presentLocation: "",
               
            });
        } else {
            toast.error("Failed to add artifact.");
        }
    };

     // for title
        useEffect(()=> {
            document.title= "Add Artifacts"
        },[])

    return (
        <div className="container mx-auto p-6">
            <ToastContainer></ToastContainer>
            <h1 className="text-3xl font-bold text-center mb-6">Add Your Artifact Here</h1>
            
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
                <div className="mb-4">
                    <label className="block font-bold mb-2">Artifact Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Artifact Image (URL)</label>
                    <input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Artifact Type</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                        className="select select-bordered w-full"
                    >
                        <option value="" disabled>Select Type</option>
                        <option value="Tools">Tools</option>
                        <option value="Weapons">Weapons</option>
                        <option value="Documents">Documents</option>
                        <option value="Writings">Writings</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Historical Context</label>
                    <input
                        type="text"
                        name="historicalContext"
                        value={formData.historicalContext}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Created At</label>
                    <input
                        type="text"
                        name="createdAt"
                        value={formData.createdAt}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Discovered At</label>
                    <input
                        type="text"
                        name="discoveredAt"
                        value={formData.discoveredAt}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Discovered By</label>
                    <input
                        type="text"
                        name="discoveredBy"
                        value={formData.discoveredBy}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Present Location</label>
                    <input
                        type="text"
                        name="presentLocation"
                        value={formData.presentLocation}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Added By</label>
                    <input
                        type="text"
                        value={user.displayName}
                        readOnly
                        className="input input-bordered w-full bg-gray-100"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Email</label>
                    <input
                        type="text"
                        value={user.email}
                        readOnly
                        className="input input-bordered w-full bg-gray-100"
                    />
                </div>
                <button type="submit" className="btn btn-outline btn-info w-full">Add Artifact</button>
            </form>
        </div>
    );
};

export default AddArtifact;
