// import React from 'react';
import { FaImage, FaVideo, FaPen, FaUserCircle } from 'react-icons/fa'; // Import FaUserCircle

function PostCard() {
  return (
    <div className="border-b pb-4 bg-white rounded-lg shadow-md p-4">
      {/* User Avatar and Input Box */}
      <div className="flex items-center gap-4 px-4">
        <FaUserCircle className="text-gray-400 text-4xl" /> {/* Adjust size as needed */}
        <input
          type="text"
          placeholder="Start a post..."
          className="w-3/4 p-2 border rounded-md"
        />
      </div>

      {/* Post Options */}
      <div className="flex justify-around mt-4 text-gray-600">
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
  );
}

export default PostCard;
