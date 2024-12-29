import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;


  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const response = await axios.get(`https://a-11-server-site.vercel.app/my-artifacts`, {
          params: { userId: user.uid },
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
    const userId = user?.uid;

    if (!userId) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "User not authenticated. Please log in to delete artifacts.",
      });
      return;
    }

    // For showing sweetalert confirmation
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`https://a-11-server-site.vercel.app/delete-artifact/${artifactId}`, {
            data: { userId },
          });

          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Your artifact has been deleted.",
          });
          navigate("/allartifacts")
          setArtifacts((prev) => prev.filter((artifact) => artifact._id !== artifactId));
        } catch (error) {
          console.error("Error deleting artifact:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to delete artifact. Please try again.",
          });
        }
      }
    });
  };





  if (loading) return <div className="flex items-center justify-center min-h-screen"><span className="loading loading-bars loading-lg "></span></div>;

  if (artifacts.length === 0)
    return <p className="text-center">No artifacts found. Add your first artifact!</p>;


  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      {artifacts.map((artifact) => (
        <div className="shadow-xl shadow-gray-600 border-2" key={artifact._id}>
          <img src={artifact.image} alt="" />
          <h3>{artifact.name}</h3>
          <p className="text-gray-700 mt-2">{artifact.historicalContext}</p>
          <p className="text-gray-700 mt-2"><span className="font-bold">Created at: </span>{artifact.createdAt}</p>
          <p className="text-gray-700 mt-2"><span className="font-bold">Discovered At: </span>{artifact.discoveredAt}</p>
          <p className="text-gray-700 mt-2"><span className="font-bold">Discovered By: </span>{artifact.discoveredBy}</p>
          <p className="text-gray-700 mt-2"><span className="font-bold">Present Location: </span>{artifact.presentLocation}</p>

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
