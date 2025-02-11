import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-4">
    
      <h1 className="text-8xl font-extrabold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="text-lg mt-2 text-gray-600 max-w-md text-center">
        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
      </p>

      
      <Link
        to="/"
        className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default Errorpage;
