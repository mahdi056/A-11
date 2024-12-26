import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;


  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/my-artifacts`, {
          params: { userId: user.uid }, // Pass userId as query param
        });
        setArtifacts(response.data);
      } catch (error) {
        console.error("Error fetching artifacts:", error);
      } finally {
        setLoading(false);
      }
    };
    if (user) fetchArtifacts();
  }, [user]);

  const handleUpdate = (artifact) => {
    navigate(`/update-artifact/${artifact._id}`, { state: artifact });
  };

  const handleDelete = async (artifactId) => {
    try {
      await axios.delete(`http://localhost:5000/delete-artifact/${artifactId}`, {
        data: { userId: user.uid }, // Ensure userId is sent to verify ownership
      });
      alert("Artifact deleted successfully!");
      setArtifacts((prev) => prev.filter((artifact) => artifact._id !== artifactId));
    } catch (error) {
      console.error("Error deleting artifact:", error);
    }
  };



  if (loading) return <div className="flex items-center justify-center min-h-screen"><span className="loading loading-bars loading-lg "></span></div>;

  if (artifacts.length === 0)
    return <p className="text-center">No artifacts found. Add your first artifact!</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      {artifacts.map((artifact) => (
        <div key={artifact._id}>
          <img src={artifact.image} alt="" />
          <h3>{artifact.name}</h3>

          <div className="flex mt-4 gap-x-2">
            <button className="btn btn-info" onClick={() => handleUpdate(artifact)}>Update</button>
            <button className="btn btn-error" onClick={() => handleDelete(artifact._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyArtifacts;
