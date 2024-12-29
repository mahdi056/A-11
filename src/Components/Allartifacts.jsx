import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [artifacts, setArtifacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Added search query state
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://a-11-server-site.vercel.app/artifacts")
      .then((res) => res.json())
      .then((data) => setArtifacts(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    document.title = "All Artifacts";
  }, []);

  // Filtered artifacts based on search query
  const filteredArtifacts = artifacts.filter((artifact) =>
    artifact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4 text-center">All Artifacts</h2>
        <ToastContainer />

        {/* Search input */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            className="input input-bordered w-full max-w-lg"
            placeholder="Search artifacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredArtifacts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtifacts.map((artifact) => (
              <div
                key={artifact._id}
                className="p-4 bg-white shadow-lg shadow-gray-600 rounded-lg"
              >
                <img
                  src={artifact.image}
                  alt={artifact.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-2">{artifact.name}</h3>
                <p className="text-gray-700 mt-2">{artifact.historicalContext}</p>
                <p className="text-gray-600 mt-2">
                  <strong>Likes:</strong> {artifact.likeCount}
                </p>
                {user ? (
                  <button
                    className="btn btn-outline btn-info mt-4"
                    onClick={() =>
                      navigate(`/artifact-details/${artifact._id}`)
                    }
                  >
                    View Details
                  </button>
                ) : (
                  <button
                    className="btn btn-outline btn-info mt-4"
                    onClick={() => navigate("/login")}
                  >
                    View Details
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-8">
            No artifacts found. Try searching for something else!
          </p>
        )}
      </div>
    </div>
  );
};

export default AllArtifacts;
