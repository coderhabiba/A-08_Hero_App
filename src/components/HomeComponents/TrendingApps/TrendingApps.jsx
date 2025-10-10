import { Link } from "react-router";
import AppCard from "../../AppCard/AppCard";

const TrendingApps = ({ data }) => {
  // console.log(data);

  return (
    <div className="py-20 text-center conatainer mx-auto">
      <h2 className="lg:text-5xl text-2xl font-bold text-[#001931] mb-4">
        Trending Apps
      </h2>
      <p className="lg:text-xl text-sm text-[#627382] mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {data.slice(0, 8).map(d => (
          <AppCard key={d.id} d={d} />
        ))}
      </div>

      <button className="bg-gradient-to-b from-[#632EE3] to-[#9F62F2] md:py-3 py-1 md:px-6 px-2 text-white rounded mt-10">
        <Link className="lg:text-base text-xs" to={'/all-apps'}>
          Show All
        </Link>
      </button>
    </div>
  );
};

export default TrendingApps;
