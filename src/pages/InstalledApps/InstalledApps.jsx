import { useLoaderData } from 'react-router';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const getInstalledApps = () => {
  const stored = localStorage.getItem('downloaded');
  return stored ? JSON.parse(stored) : [];
};

const InstalledApps = () => {
  const allAppsData = useLoaderData();

  const [installedAppsState, setInstalledAppsState] = useState(() =>
    getInstalledApps()
  );

  const [sortOrder, setSortOrder] = useState(null); 

  let showApp = allAppsData.filter(app =>
    installedAppsState.includes(app.id.toString())
  );

  if (sortOrder) {
    showApp = [...showApp].sort((a, b) => {
      if (sortOrder === 'asc') return a.downloads[0] - b.downloads[0];
      if (sortOrder === 'desc') return b.downloads[0] - a.downloads[0];
      return 0;
    });
  }

  // uninstall
  const handleUninstall = (id, title) => {
    const updated = installedAppsState.filter(appId => appId !== id.toString());
    localStorage.setItem('downloaded', JSON.stringify(updated));
    setInstalledAppsState(updated);
    toast.success(`${title} uninstalled successfully!`);
  };

  return (
    <div className="max-w-[1400px] mx-auto text-center py-20">
      <ToastContainer position="top-right" autoClose={2000} />
      <h1 className="text-5xl font-bold text-[#001931]">Your Installed Apps</h1>
      <p className="mb-10 mt-4">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex items-center justify-between mb-6">
        <p className="font-semibold">{showApp.length} Apps Found</p>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 text-[#627382]">
            Sort By Downloads
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={() => setSortOrder('asc')}>Low to High</button>
            </li>
            <li>
              <button onClick={() => setSortOrder('desc')}>High to Low</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {showApp.length > 0 ? (
          showApp.map(app => (
            <div
              key={app.id}
              className="p-4 rounded shadow flex justify-between items-center"
            >
              <div className="flex gap-4">
                <img
                  className="w-20 rounded-2xl"
                  src={app.image}
                  alt={app.title}
                />
                <div>
                  <h3 className="mt-2 font-bold text-lg text-left mb-3">
                    {app.title}
                  </h3>
                  <div className="flex items-center gap-4 justify-start">
                    <div className="flex items-center gap-1 mr-4">
                      <img
                        className="w-4"
                        src="https://i.ibb.co.com/6cTPGz9G/icon-downloads.png"
                        alt=""
                      />
                      <p className="text-[#00d390]">{app.downloads}</p>
                    </div>
                    <div className="flex items-center gap-1 mr-4">
                      <img
                        className="w-4"
                        src="https://i.ibb.co/PvbzkJzK/icon-ratings.png"
                        alt=""
                      />
                      <p className="text-[#ff8811]">{app.ratingAvg}</p>
                    </div>
                    <p className="text-[#627382]">{app.size}MB</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id, app.title)}
                className="btn btn-success text-white"
              >
                Uninstall
              </button>
            </div>
          ))
        ) : (
          <p className="text-red-500 text-xl col-span-full">
            No apps installed yet!
          </p>
        )}
      </div>
    </div>
  );
};

export default InstalledApps;
