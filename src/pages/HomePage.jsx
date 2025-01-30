import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import RightPanel from "../components/RightPanel";
import PostCard from "../components/PostCard";

const Homepage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

       
      <div className="flex justify-center bg-gray-100 pt-16">
        <div className="w-auto max-w-6xl flex gap-4">
          
          
          
            <Sidebar />
          

          {/* Center Column (PostCard + Feed) */}
          <div className="w-1/2 flex flex-col gap-4">
            <PostCard />
            <div className="overflow-y-auto h-[calc(100vh-10rem)]">
              <Feed />
            </div>
          </div>

          
         
            <RightPanel />
          

        </div>
      </div>
    </>
  );
};

export default Homepage;
