import { FaImage, FaVideo, FaPen } from "react-icons/fa";

const Feed = () => {
  return (
    <div className="w-1/2 bg-white rounded-lg shadow-md p-4">
      {/* Post Creation Box */}
      <div className="border-b pb-4">
        <input
          type="text"
          placeholder="Start a post..."
          className="w-full p-2 border rounded-md"
        />
        <div className="flex justify-around mt-2 text-gray-600">
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
            <FaImage /> Photo
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
            <FaVideo /> Video
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
            <FaPen /> Write Article
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className="mt-4">
        <div className="border p-4 rounded-md shadow-sm">
          <h3 className="font-semibold">John Doe</h3>
          <p className="text-gray-600 text-sm">Software Engineer at Google</p>
          <p className="mt-2">Excited to share my latest project! 🚀</p>
          <img src="https://via.placeholder.com/500x300" alt="Post" className="mt-2 rounded-md" />
          <div className="flex justify-between text-gray-600 text-sm mt-2">
            <span>👍 124</span>
            <span>💬 45</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
