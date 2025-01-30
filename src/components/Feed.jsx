import { useState } from "react";
import { FaThumbsUp, FaComment, FaShare, FaUserCircle } from "react-icons/fa";

const Feed = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4">
      {/* Post List */}
      <div className="mt-4 space-y-6">
        <PostCard />
        <PostCard />
        <PostCard />
        
      </div>
    </div>
  );
};

// Basic Post Structure
const PostCard = () => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="border p-4 rounded-md shadow-sm">
      {/* User Info */}
      <div className="flex items-center gap-3">
        <FaUserCircle className="text-gray-400 text-4xl" />
        <div>
          <h3 className="font-semibold">User Name</h3>
          <p className="text-gray-600 text-sm">User Role</p>
        </div>
      </div>

      {/* Post Description */}
      <p className="mt-2">Post description goes here...</p>

      {/* Post Image */}
      <img src="https://via.placeholder.com/500x300" alt="Post" className="mt-2 rounded-md" />

      {/* Like, Comment, Share */}
      <div className="flex justify-around text-gray-600 text-sm mt-3 border-t pt-2">
        <button className="flex items-center gap-1 hover:text-blue-600">
          <FaThumbsUp /> Like
        </button>
        <button
          className="flex items-center gap-1 hover:text-blue-600"
          onClick={() => setShowComments(!showComments)}
        >
          <FaComment /> Comments
        </button>
        <button className="flex items-center gap-1 hover:text-blue-600">
          <FaShare /> Share
        </button>
      </div>

      {/* Expandable Comments Section */}
      {showComments && (
        <div className="mt-2 border-t pt-2">
          <p className="text-sm text-gray-700">Recent comments...</p>
        </div>
      )}
    </div>
  );
};

export default Feed;
