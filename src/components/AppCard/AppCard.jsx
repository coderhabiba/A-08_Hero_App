import { Link } from "react-router";

const AppCard = ({ d }) => {
  
  return (
    <Link to={`/app-detailes/${d.id}`}>
      <div className="card p-4 bg-white shadow-sm">
        <figure className="bg-[#D9D9D9] h-[316px] rounded-md">
          <img src={d.image} alt={d.title} />
        </figure>
        <div className="">
          <h2 className="text-left my-5 text-xl font-bold text-[#001931]">
            {d.title}
          </h2>

          <div className="card-actions justify-between">
            <button className="bg-[#F1F5E8] rounded py-1 px-2 flex items-center gap-2">
              <img
                className="w-4"
                src="https://i.ibb.co.com/6cTPGz9G/icon-downloads.png"
                alt="download"
              />
              <p className="text-[#00D390] font-medium text-[16px]">
                {d.downloads}
              </p>
            </button>
            <button className="bg-[#FFF0E1] rounded py-1 px-2 flex items-center gap-2">
              <img
                className="w-4"
                src="https://i.ibb.co.com/PvbzkJzK/icon-ratings.png"
                alt="star"
              />
              <p className="text-[#FF8811] font-medium text-[16px]">
                {d.ratingAvg}
              </p>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;