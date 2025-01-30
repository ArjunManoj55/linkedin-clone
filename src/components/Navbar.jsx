import { FaHome, FaBriefcase, FaCommentDots, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { MdApps } from "react-icons/md";
import linkedinLogo from "../assets/images/linkedin-48.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white border-b shadow-sm">
      {/* Left - LinkedIn Logo */}
      <div className="flex items-center space-x-2">
        <img src={linkedinLogo} alt="LinkedIn" className="h-8" />
      </div>

      {/* Center - Search Bar */}
      <div className="flex items-center bg-gray-200 rounded-lg px-3 py-1 w-72">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent focus:outline-none ml-2 text-sm w-full"
        />
      </div>

      {/* Right - Navigation Icons */}
      <div className="flex items-center space-x-6 text-gray-600">
        <div className="flex flex-col items-center">
          <FaHome className="text-xl" />
          <span className="text-xs font-semibold">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <IoPeopleSharp className="text-xl" />
          <span className="text-xs font-semibold">My Network</span>
        </div>
        <div className="flex flex-col items-center">
          <FaBriefcase className="text-xl" />
          <span className="text-xs font-semibold">Jobs</span>
        </div>
        <div className="flex flex-col items-center">
          <FaCommentDots className="text-xl" />
          <span className="text-xs font-semibold">Messaging</span>
        </div>
        <div className="flex flex-col items-center relative">
          <FaBell className="text-xl" />
          <span className="text-xs font-semibold">Notifications</span>
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
            1
          </span>
        </div>
        <div className="flex flex-col items-center">
          <FaUserCircle className="text-xl" />
          <span className="text-xs font-semibold">Me</span>
        </div>
        <div className="flex flex-col items-center">
          <MdApps className="text-xl" />
          <span className="text-xs font-semibold">For Business</span>
        </div>
      </div>

      {/* Premium Section */}
      <div className="text-xs text-yellow-600 font-semibold">
        <span>Get hired faster. Try </span>
        <a href="#" className="underline">Premium free.</a>
      </div>
    </nav>
  );
};

export default Navbar;
