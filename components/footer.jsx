
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Importing from react-icons

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-11 h-48 overflow-hidden">
      {/* Background Image with Blur */}
  
        <img
          src=""
          alt="Footer Background"
          layout="fill" // Fills the parent container
          objectFit="cover" // Maintains aspect ratio
          className="blur-xl w-full h-48 object-cover z-0 absolute" // Applies a blur effect
        />
      

      {/* Content Section */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold">Stay Connected</h2>
        <p className="mt-2">Follow us on our social media channels</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-gray-900 hover:text-gray-100">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-100">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-100">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-100">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-100">
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
        <p className="mt-4">© 2024 Syed Haseeb. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
