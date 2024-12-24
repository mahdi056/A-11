import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    // Fetch artifact data
    fetch("/info.json")
      .then((response) => response.json())
      .then((data) => setArtifacts(data))
      .catch((error) => console.error("Error loading artifacts:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
      {artifacts.map((artifact) => (
        <div
          key={artifact.id}
          className="card shadow-lg p-4 bg-white rounded-lg"
        >
          <img
            src={artifact.image}
            alt={artifact.name}
            className="h-40 w-full object-cover rounded-lg"
          />
          <h2 className="text-xl font-bold mt-4">{artifact.name}</h2>
          <p className="text-gray-700">Type: {artifact.type}</p>
          <p className="text-gray-700">
            Location: {artifact.present_location}
          </p>
          <Link to={`/artifactdetails/${artifact.id}`}>
            <button className="btn btn-info mt-4">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllArtifacts;
