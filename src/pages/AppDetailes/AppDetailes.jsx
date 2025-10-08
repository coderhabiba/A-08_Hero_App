import { useLoaderData, useParams } from 'react-router';

const AppDetailes = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const findAppDetailes = data.find(app => app.id === Number(id));
  return (
    <div className="py-20 max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 border-b border-b-[#00193133] pb-10">
        <div className="w-[355px]">
          <img
            src={findAppDetailes.image}
            className="rounded shadow-xl w-full"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold border-b-2 border-b-[#dbdfe657] pb-7">
            <span>{findAppDetailes.title}</span>
            <br />
            <span className="text-xl font-light text-[#534f4f5b] mr-1">
              Developed by
            </span>
            <span className="text-xl font-bold text-purple-500">
              {findAppDetailes.companyName}
            </span>
          </h1>
          <div className="details mt-5 mb-[30px] flex justify-between items-center gap-28">
            <div>
              <img
                className="mb-2"
                src="https://i.ibb.co.com/6cTPGz9G/icon-downloads.png"
                alt="download"
              />
              <p className="mb-2 text-[#001931] opacity-[0.8]">Downloads</p>
              <p className="text-[40px] font-extrabold text-[#001931]">
                {findAppDetailes.downloads}
              </p>
            </div>
            <div>
              <img
                className="mb-2"
                src="https://i.ibb.co.com/PvbzkJzK/icon-ratings.png"
                alt="rating"
              />
              <p className="mb-2 text-[#001931] opacity-[0.8]">
                Average Ratings
              </p>
              <p className="text-[40px] font-extrabold text-[#001931]">
                {findAppDetailes.ratingAvg}
              </p>
            </div>
            <div>
              <img
                className="mb-2"
                src="https://i.ibb.co.com/zWdd47N4/icon-review.png"
                alt="review"
              />
              <p className="mb-2 text-[#001931] opacity-[0.8]">Total Reviews</p>
              <p className="text-[40px] font-extrabold text-[#001931]">
                {findAppDetailes.reviews}
              </p>
            </div>
          </div>
          <button className="btn btn-success text-white">
            Install Now ({findAppDetailes.size} MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetailes;
