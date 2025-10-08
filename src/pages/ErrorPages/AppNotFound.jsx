import { useNavigate } from "react-router";

const AppNotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div>
          <img src="https://i.ibb.co.com/4RNTdDgw/App-Error.png" alt="app-not-found" />
        </div>
        <div>
          <h2 className="mt-4 text-5xl font-semibold text-[#001931]">
            OPPS!! APP NOT FOUND
          </h2>
          <p className="mt-2 text-xl text-[#627382]">
            The App you are requesting is not found on our system. please try
            another apps.
          </p>
          <button
            onClick={handleGoBack}
            className="btn md:text-[16px] text-xs font-semibold text-white mt-4 rounded-sm bg-gradient-to-b from-[#632EE3] to-[#9F62F2] md:py-3 py-1 md:px-4 px-2"
          >
            Go Back!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppNotFound;
