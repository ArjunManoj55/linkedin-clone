import { FaBookmark, FaUsers, FaCalendarAlt, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; //  Import useNavigate

const Sidebar = () => {
  const navigate = useNavigate(); //  Initialize navigation function

  return (
    <aside className="w-1/4 bg-white rounded-lg shadow-md p-4">
      {/* Profile Summary */}
      <div 
        className="flex flex-col items-center border-b pb-4 cursor-pointer" 
        onClick={() => navigate("/profile")} //  Navigate to ProfilePage on click
      >
        <FaUserCircle className="text-gray-400 text-6xl" />
        <h2 className="text-lg font-semibold mt-2">Arjun Manoj</h2>
        <p className="text-sm text-gray-500">Frontend Developer • India</p>
      </div>

      {/* Profile Stats */}
      <div className="mt-4 border-b pb-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Profile viewers</span>
          <span className="text-blue-600">342</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>Post impressions</span>
          <span className="text-blue-600">1.2K</span>
        </div>
      </div>

      {/* Premium Subscription */}
      <div className="mt-4 border-b pb-4">
        <p className="text-xs text-yellow-600 font-semibold">
          Try LinkedIn <span className="underline">Premium for free</span>
        </p>
      </div>

      {/* Quick Links */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
            <FaBookmark /> Saved Items
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
            <FaUsers /> Groups
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
            <FaCalendarAlt /> Events
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
