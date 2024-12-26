import { useEffect, useState } from "react";

const LikedArtifacts = () => {
  const [likedArtifacts, setLikedArtifacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/liked-artifacts")
      .then((res) => res.json())
      .then((data) => setLikedArtifacts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Liked Artifacts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {likedArtifacts.map((artifact) => (
          <div key={artifact._id} className="p-4 bg-white shadow-lg rounded-lg">
            <img
              src={artifact.image}
              alt={artifact.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-2">{artifact.name}</h3>
            <p className="text-gray-600 mt-2">
              <strong>Likes:</strong> {artifact.likeCount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedArtifacts;
