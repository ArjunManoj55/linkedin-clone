import Navbar from "../components/Navbar"; // ✅ Import Navbar
import { FaCamera, FaPen } from "react-icons/fa";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      {/* ✅ Navbar at the top */}
      <Navbar />  

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4">
        {/* Cover Photo */}
        <div className="relative h-40 bg-gray-300">
          <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
            <FaCamera className="text-gray-600" />
          </button>
        </div>

        {/* Profile Details */}
        <div className="p-6">
          <div className="relative w-24 h-24 mx-auto -mt-12 border-4 border-white rounded-full overflow-hidden">
            <img
              src={user?.profilePic || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center mt-3">
            <h2 className="text-2xl font-semibold">{user?.name || "User Name"}</h2>
            <p className="text-gray-600">{user?.bio || "Frontend Developer"}</p>
            <p className="text-sm text-gray-500">{user?.location || "Location, Country"}</p>

            <div className="mt-3 flex justify-center space-x-4 text-blue-600 font-semibold text-sm">
              <button>700 followers</button>
              <span>•</span>
              <button>500+ connections</button>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex justify-center space-x-2">
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full font-medium">
                Open to
              </button>
              <button className="border border-gray-400 px-4 py-2 rounded-full font-medium">
                Add profile section
              </button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full font-medium">
                Enhance profile
              </button>
              <button className="border border-gray-400 px-4 py-2 rounded-full font-medium">
                Resources
              </button>
            </div>

            {/* Edit Button */}
            <button className="absolute top-2 right-4 text-gray-600 hover:text-gray-800">
              <FaPen />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
