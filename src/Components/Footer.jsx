
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div>
                        <h4 className="text-xl font-bold mb-4">About Us</h4>
                        <p className="text-gray-400 text-sm">
                            We are dedicated to preserving history by showcasing artifacts that tell the stories of ancient civilizations. 
                            Join us on a journey to explore and celebrate the wonders of the past.
                        </p>
                        <p className="text-gray-200 mt-2">Email: ahnafmahdi12@gmail.com</p>
                    </div>

                   
                    <div>
                        <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                        <ul className="text-gray-400 text-sm space-y-2">
                            <li>Home</li>
                            <li>Artifacts</li>
                            <li>About Us</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    
                    <div>
                        <h4 className="text-xl font-bold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-400">
                                <FaFacebook></FaFacebook>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400">
                                <FaTwitter></FaTwitter>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400">
                                <FaInstagram></FaInstagram>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400">
                               <FaLinkedin></FaLinkedin>
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-gray-700" />

                {/* Copyright Section */}
                <div className="text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Artifact Explorer. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
