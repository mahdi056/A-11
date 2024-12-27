import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Authprovider";

const AllArtifacts = () => {

  const {user} = useContext(AuthContext);

  const [artifacts, setArtifacts] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      fetch("http://localhost:5000/artifacts")
        .then((res) => res.json())
        .then((data) => setArtifacts(data))
        .catch((error) => console.error(error));
    }, []);

     // for title
     useEffect(()=> {
      document.title= "All Artifacts"
  },[])
  

  return (
    <div>

<div className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">All Artifacts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact) => (
          <div key={artifact._id} className="p-4 bg-white shadow-lg shadow-gray-600 rounded-lg">
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
            {
                user?
                ( <button
                    className="btn btn-outline btn-info mt-4"
                    onClick={() => navigate(`/artifact-details/${artifact._id}`)}
                  >
                    View Details
                  </button>)
                :
                ( <button
                    className="btn btn-outline btn-info mt-4"
                    onClick={() => navigate('/login')}
                  >
                    View Details
                  </button>)
            }
           
          </div>
        ))}
      </div>
    </div>
      
    </div>
  );
};

export default AllArtifacts;
