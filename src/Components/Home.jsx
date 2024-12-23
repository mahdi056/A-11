import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner3.jpg";

const Home = () => {

    const artifacts = [
        {
          id: 1,
          name: "Ancient Vase",
          description: "A beautiful ancient vase from the 15th century.",
          likeCount: 120,
          image: "https://via.placeholder.com/200x200?text=Artifact+1"
        },
        {
          id: 2,
          name: "Roman Sword",
          description: "A finely crafted Roman sword used in battle.",
          likeCount: 95,
          image: "https://via.placeholder.com/200x200?text=Artifact+2"
        },
        {
          id: 3,
          name: "Egyptian Mask",
          description: "An intricate Egyptian mask made of gold.",
          likeCount: 150,
          image: "https://via.placeholder.com/200x200?text=Artifact+3"
        },
        {
          id: 4,
          name: "Greek Statue",
          description: "A well-preserved Greek marble statue of a god.",
          likeCount: 80,
          image: "https://via.placeholder.com/200x200?text=Artifact+4"
        },
        {
          id: 5,
          name: "Medieval Shield",
          description: "A shield used by medieval knights in combat.",
          likeCount: 110,
          image: "https://via.placeholder.com/200x200?text=Artifact+5"
        },
        {
          id: 6,
          name: "Mayan Artifact",
          description: "A mysterious artifact from the ancient Mayan civilization.",
          likeCount: 130,
          image: "https://via.placeholder.com/200x200?text=Artifact+6"
        }
      ];

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

           {/* Featured artifacts */}

           <div className="mt-12 px-4">
                <h2 className="text-3xl font-bold text-center mb-6">Featured Artifacts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {artifacts.map((artifact) => (
                        <div key={artifact.id} className="card bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={artifact.image} alt={artifact.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{artifact.name}</h3>
                                <p className="text-gray-600 text-sm">{artifact.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-lg font-bold">{artifact.likeCount} Likes</span>
                                    <button className="btn btn-outline btn-info">View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Home;
