import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ArtifactDetails = () => {
  const { id } = useParams();
  const [artifact, setArtifact] = useState(null);

  useEffect(() => {
    fetch("/info.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedArtifact = data.find((item) => item.id === id);
        setArtifact(selectedArtifact);
      })
      .catch((error) => console.error("Error loading artifact details:", error));
  }, [id]);

  if (!artifact) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <img
        src={artifact.image}
        alt={artifact.name}
        className="w-full h-60 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{artifact.name}</h1>
      <p className="text-gray-700 mt-2">{artifact.description}</p>
      <p className="text-gray-700 mt-2">
        <strong>Type:</strong> {artifact.type}
      </p>
      <p className="text-gray-700 mt-2">
        <strong>Location:</strong> {artifact.present_location}
      </p>
    </div>
  );
};

export default ArtifactDetails;
