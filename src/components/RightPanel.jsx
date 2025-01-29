const RightPanel = () => {
    return (
      <aside className="w-1/4 bg-white rounded-lg shadow-md p-4">
        {/* Trending Topics */}
        <div className="border-b pb-4">
          <h3 className="font-semibold text-lg">Trending News</h3>
          <ul className="mt-2 text-gray-600 space-y-2">
            <li className="cursor-pointer hover:text-blue-600">
              📈 Tech industry growth in 2025
            </li>
            <li className="cursor-pointer hover:text-blue-600">
              🚀 AI taking over software jobs?
            </li>
            <li className="cursor-pointer hover:text-blue-600">
              📊 Startup investments rise 40%
            </li>
          </ul>
        </div>
  
        {/* Puzzle/Game Section */}
        <div className="mt-4 border-b pb-4">
          <h3 className="font-semibold text-lg">Daily Puzzle</h3>
          <p className="text-sm text-gray-600 mt-1">
            Solve this riddle: What comes once in a minute, twice in a moment, but never in a thousand years?
          </p>
        </div>
  
        {/* Advertisement */}
        <div className="mt-4">
          <h3 className="font-semibold text-lg">Sponsored</h3>
          <img src="https://via.placeholder.com/250x100" alt="Ad" className="mt-2 rounded-md" />
        </div>
      </aside>
    );
  };
  
  export default RightPanel;
  