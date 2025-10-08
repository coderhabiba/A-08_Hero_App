import { useLoaderData, useParams } from 'react-router';
import Chart  from '../../components/Chart/Chart';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { setData } from '../../components/LocalStorage/AddToStorage';


const AppDetailes = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [install,setInstall] = useState(true)
  const findAppDetailes = data.find(app => app.id === Number(id));
  const handleInstall = (id) => {
    setInstall(false)
    
    if (setData(id)) {
      toast.success('This app installed,Successfully!')
    }
    // else {
    //   toast.warning('This app Already axist!');
    // }
  }

  return (
    <div className="py-20 max-w-[1400px] mx-auto">
      <ToastContainer />
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
                className="mb-2 w-10"
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
                className="mb-2 w-10"
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
                className="mb-2 w-10"
                src="https://i.ibb.co.com/zWdd47N4/icon-review.png"
                alt="review"
              />
              <p className="mb-2 text-[#001931] opacity-[0.8]">Total Reviews</p>
              <p className="text-[40px] font-extrabold text-[#001931]">
                {findAppDetailes.reviews}
              </p>
            </div>
          </div>
          <button
            onClick={() => handleInstall(id)}
            className="btn btn-success text-white"
            disabled={!install}
          >
            {install ? `Install Now (${findAppDetailes.size} MB)` : `Installed`}
          </button>
        </div>
      </div>
      {/* chart */}
      <Chart data={findAppDetailes} />
      {/* description */}
      <h5 className="mt-10 mb-6 text-2xl font-semibold text-[#001931]">
        Description
      </h5>
      <p className="text-xl text-[#627382]">{findAppDetailes.Part1_Overview}</p>{' '}
      <br />
      <p className="text-xl text-[#627382]">
        {findAppDetailes.Part2_Features}
      </p>{' '}
      <br />
      <p className="text-xl text-[#627382]">
        {findAppDetailes.Part3_Benefits_and_Closing}
      </p>
    </div>
  );
};

export default AppDetailes;
