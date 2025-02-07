import { useState } from "react"; 
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { updateProfile } from "../redux/userSlice";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // ✅ State for Edit Modal
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    position: user?.position || "Frontend Developer",
    location: user?.location || "",
    profilePic: user?.profilePic || "",
  });

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Profile Picture Upload
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, profilePic: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // ✅ Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData)); // ✅ Send updated data to Redux
    setIsEditing(false); // ✅ Close modal
  };

  return (
    <>
      {/* ✅ Navbar at the top */}
      <Navbar />

      {/* Profile Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-8">
        {/* Cover Photo */}
        <div className="relative h-40 bg-gray-200">
          {/* ✅ Profile Picture (Left-Aligned) */}
          <div className="absolute left-6 bottom-[-40px] w-24 h-24 border-4 border-white rounded-full overflow-hidden mt-24">
            <img
              src={user?.profilePic || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-6 pt-12">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold">{user?.name || "User Name"}</h2>
            <p className="text-gray-600">{user?.position || "Frontend Developer"}</p>
            <p className="text-sm text-gray-500">
              {user?.location || "Location, Country"} •{" "}
              <span className="text-blue-600 cursor-pointer">Contact info</span>
            </p>

            {/* Connections */}
            <div className="mt-2 text-sm text-blue-600">
              <span className="cursor-pointer">700 followers</span> •{" "}
              <span className="cursor-pointer">500+ connections</span>
            </div>

            {/* Profile Actions */}
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium">
                Call me
              </button>
              <button className="border border-gray-400 px-4 py-2 rounded-full font-medium">
                Mail me
              </button>
              {/* ✅ Existing "Edit" Button */}
              <button
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full font-medium"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button className="border border-gray-400 px-4 py-2 rounded-full font-medium">
                Social Media
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              {/* ✅ Profile Picture Upload */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                <input type="file" accept="image/*" onChange={handleFileChange} className="mt-1 block w-full text-sm" />
              </div>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-2"
                placeholder="Name"
              />
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-2"
                placeholder="Position"
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-4"
                placeholder="Location"
              />
              <div className="flex justify-between">
                <button type="button" className="px-4 py-2 bg-gray-400 rounded" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
