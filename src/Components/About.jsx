

const About = () => {
    return (
        <div>

            <div className="max-w-3xl mx-auto p-6 text-center">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="text-lg mb-4">
                    Welcome to <span className="font-semibold">Artifact Atlas</span>, a platform for history enthusiasts, researchers, and curious minds to explore the world's historical treasures.
                </p>
                <p className="mb-4">
                    At <span className="font-semibold">Artifact Atlas</span>, we believe that every artifact has a story to tell. Our platform allows users to:
                </p>
                <ul className="list-disc list-inside mb-4 text-left mx-auto max-w-md">
                    <li>Explore a vast collection of artifacts.</li>
                    <li>View Details and uncover historical significance.</li>
                    <li>Like artifacts and engage with the community.</li>
                    <li>Add new artifacts to enrich our collection.</li>
                </ul>
                <p className="mb-4">
                    Our mission is to make history more accessible and engaging by providing a user-friendly experience for discovering, sharing, and preserving artifacts.
                </p>
                <p className="font-semibold">Join us in preserving history, one artifact at a time.</p>
            </div>

        </div>
    );
};

export default About;