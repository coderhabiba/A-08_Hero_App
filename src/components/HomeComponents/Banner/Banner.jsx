
const Banner = () => {
  return (
    <div className="text-center pt-20 pb-10">
      <h2 className="text-7xl font-bold text-[#182F44] mb-4">
        We Build <br /> <span className="text-[#925DED]">Productive</span> Apps
      </h2>
      <p className="text-xl text-[#627382] mb-10">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.<br /> Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      <button className="btn bg-white py-6 mr-4">
        <div className="w-8">
          <img
            src="https://i.ibb.co.com/HDdn4gBF/play-store.png"
            alt="play-store"
          />
        </div>
        <p className="text-xl font-semibold">Google Play</p>
      </button>

      <button className="btn bg-white py-6">
        <div className="w-8">
          <img
            src="https://i.ibb.co.com/8DCyDZ6X/app-store-48.png"
            alt="app-store"
          />
        </div>
        <p className="text-xl font-semibold">App Store</p>
      </button>
    </div>
  );
};

export default Banner;