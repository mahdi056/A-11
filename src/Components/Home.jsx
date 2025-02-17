import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner3.jpg";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import { useEffect, useState } from "react";
import Review from "./Review";



const Home = () => {

    const { user } = useContext(AuthContext);
   
    const [artifacts, setArtifacts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/artifacts")
            .then((res) => res.json())
            .then((data) => setArtifacts(data))
            .catch((error) => console.error(error));
    }, []);
    // for title
    useEffect(() => {
        document.title = "Artifact Atlas"
    }, [])

    return (
        <div className="mt-8">



            {/* Slider */}
            <div className="mx-auto flex justify-center">

                <div className="carousel w-4/5">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={banner1} className="w-full object-cover" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={banner2} className="w-full object-cover" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={banner3} className="w-full object-cover" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Artifacts */}

            <div className="p-6 bg-gray-100 mt-12">
                <h1 className="text-3xl text-center font-bold mb-8">About Artifacts</h1>
                <h2 className="font-bold mb-4">What are Artifacts?</h2>
                <p className="mb-4">
                    Artifacts are physical items that hold significant historical, cultural, or scientific value. These objects are typically preserved and studied to understand the past, cultures, or specific events. In the context of Artifact Atlas, we showcase various artifacts from around the world, offering users a chance to explore and learn about their rich histories.
                </p>
                <h3 className="font-semibold mb-2">Why are Artifacts Important?</h3>
                <p>
                    Artifacts offer valuable insights into the life, technology, and beliefs of past civilizations. They help historians, archaeologists, and researchers better understand the evolution of humanity and the events that shaped the world. By studying artifacts, we can preserve history for future generations and learn important lessons.
                </p>
            </div>

            {/* Featured Artifacts */}
            <div className="p-8 mt-12">
                <h2 className="text-3xl font-bold mb-4 text-center">Featured Artifacts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {artifacts.map((artifact) => (
                        <div key={artifact._id} className="p-4 bg-white shadow-xl shadow-gray-600 rounded-lg">
                            <img
                                src={artifact.image}
                                alt=""
                                className="w-full h-40 object-cover rounded-lg"
                            />
                            <h3 className="text-xl font-semibold mt-2">{artifact.name}</h3>
                            <p className="text-gray-700 mt-2">{artifact.historicalContext}</p>
                            <p className="text-gray-600 mt-2">
                                <strong>Likes:</strong> {artifact.likeCount}
                            </p>
                            {
                                user ?
                                    (<button
                                        className="btn btn-outline btn-info mt-4"
                                        onClick={() => navigate(`/artifact-details/${artifact._id}`)}
                                    >
                                        View Details
                                    </button>)
                                    :
                                    (<button
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
            {/* See all button */}

            <div className="flex justify-center mt-12">
                <Link to="/allartifacts"><button className="btn btn-outline btn-info px-12">See All</button></Link>
            </div>

            {/* About Us Section */}
            <div className="mt-12 px-4 w-4/5 mx-auto text-center shadow-2xl shadow-gray-400">
                <h2 className="text-4xl font-bold mb-4 text-blue-500">About Us</h2>
                <p className="text-gray-700 text-lg">
                    Our mission is to preserve history and bring the stories of ancient civilizations to life.
                    Explore artifacts from around the world and gain insight into our shared cultural heritage.
                </p>
                <div><NavLink to='/about'><button className="btn btn-outline btn-info">See Details</button></NavLink></div>
            </div>

            {/* User Testimonials Section */}
            <div className="mt-12 px-4 w-4/5 mx-auto">
                <h2 className="text-4xl font-bold text-center mb-6 text-blue-500 ">User Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 shadow-2xl">
                    <div className="p-4 bg-white shadow-md rounded-lg">
                        <p className="text-gray-700 italic">
                            "This site is amazing! I love learning about ancient artifacts and their history. Highly recommended!"
                        </p>
                        <h4 className="mt-4 text-xl font-bold text-right">- John Doe</h4>
                    </div>
                    <div className="p-4 bg-white shadow-md rounded-lg">
                        <p className="text-gray-700 italic">
                            "The collection of artifacts is incredible. It’s like taking a trip back in time. Fantastic experience!"
                        </p>
                        <h4 className="mt-4 text-xl font-bold text-right">- Jane Smith</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
