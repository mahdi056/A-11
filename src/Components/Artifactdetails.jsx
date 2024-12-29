import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ArtifactDetails = () => {

  const { id } = useParams();
  const [artifact, setArtifact] = useState(null);

  useEffect(() => {
    fetch(`https://a-11-server-site.vercel.app/artifacts/${id}`)
      .then((res) => res.json())
      .then((data) => setArtifact(data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleLike = () => {
    fetch(`https://a-11-server-site.vercel.app/artifacts/${id}/like`, {
      method: "PATCH",
    })
      .then(() => {
        setArtifact((prev) => ({
          ...prev,
          likeCount: prev.likeCount + 1,
        }));
      })
      .catch((error) => console.error("Error liking artifact:", error));
  };

  if (!artifact) return <p>Loading...</p>;

 
  return (
    <div>

<div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <img
        src={artifact.image}
        alt={artifact.name}
        className="w-full h-60 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{artifact.name}</h1>
      <p className="text-gray-700 mt-2">{artifact.historicalContext}</p>
      <p className="text-gray-700 mt-2"><span className="font-bold">Created at: </span>{artifact.createdAt}</p>
      <p className="text-gray-700 mt-2"><span className="font-bold">Discovered At: </span>{artifact.discoveredAt}</p>
      <p className="text-gray-700 mt-2"><span className="font-bold">Discovered By: </span>{artifact.discoveredBy}</p>
      <p className="text-gray-700 mt-2"><span className="font-bold">Present Location: </span>{artifact.presentLocation}</p>
      <p className="text-gray-700 mt-2">
        <strong>Likes:</strong> {artifact.likeCount}
      </p>
      <button className="btn btn-outline btn-info mt-4" onClick={handleLike}>
        Like
      </button>
    </div>
      
    </div>
  );
};

export default ArtifactDetails;
