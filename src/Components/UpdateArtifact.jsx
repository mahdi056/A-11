import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const UpdateArtifact = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(location.state || {
    name: "",
    image: "",
    type: "",
    historicalContext: "",
    createdAt: "",
    discoveredAt: "",
    discoveredBy: "",
    presentLocation:""
    
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.put(
        `https://a-11-server-site.vercel.app/update-artifact/${id}`,
        formData
      );
      if (response.status === 200) {
        toast.success("Artifact Updated Successfully!!!",{
          position: 'top-center',
          autoClose: 2000,
        });
        setTimeout(() => navigate("/my-artifacts"), 2000); 
      }
    } catch (error) {
      console.error("Error updating artifact:", error.response?.data || error.message);
      toast.error("Failed to update artifact. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="container mx-auto p-6">
      
      <h1 className="text-3xl font-bold text-center mb-6">Update Artifact</h1>
      <ToastContainer></ToastContainer>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
     
     
        <div className="mb-4">
          <label className="block font-bold mb-2">Artifact Name</label>
          <input
            type="text"
            name="name"
            value={formData.name || ""}
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
            value={formData.image || ""}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Artifact Type</label>
          <select
            name="type"
            value={formData.type || ""}
            onChange={handleChange}
            required
            className="select select-bordered w-full"
          >
            <option value="" disabled>
              Select Type
            </option>
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
            value={formData.historicalContext || ""}
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
            value={formData.createdAt || ""}
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
            value={formData.discoveredAt || ""}
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
            value={formData.discoveredBy || ""}
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
            value={formData.presentLocation || ""}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>


        <button type="submit" className="btn btn-info w-full" disabled={isSubmitting}>
          {isSubmitting ? "Updating..." : "Update Artifact"}
        </button>
      </form>
    </div>
  );
};

export default UpdateArtifact;
