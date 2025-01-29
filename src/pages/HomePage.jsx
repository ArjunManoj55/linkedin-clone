import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import RightPanel from "../components/RightPanel";

const Homepage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex justify-center bg-gray-100 py-16 min-h-screen">
        <div className="w-full max-w-6xl flex gap-4">
          <Sidebar />
          <Feed />
          <RightPanel />
        </div>
      </div>
    </>
  );
};

export default Homepage;

