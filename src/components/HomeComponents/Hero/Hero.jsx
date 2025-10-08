
const Hero = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <img src="https://i.ibb.co.com/1fzMk59K/hero.png" alt="hero-img" />
      </div>
      <div className="bg-gradient-to-b from-[#632EE3] to-[#9F62F2]">
        <div className="hero-content flex flex-col justify-center items-center py-20 max-w-[1400px] mx-auto ">
          <h3 className="mb-10 text-5xl font-bold text-white text-center">
            Trusted by Millions, Built for You
          </h3>
          <div className="flex lg:flex-row flex-col items-center lg:gap-48">
            <div className="text-white text-center">
              <p className="text-[16px]">Total Downloads</p>
              <h3 className="font-extrabold text-[64px]">29.6M</h3>
              <p className="text-[16px]">21% more than last month</p>
            </div>
            <div className="text-white text-center">
              <p className="text-[16px]">Total Reviews</p>
              <h3 className="font-extrabold text-[64px]">906K</h3>
              <p className="text-[16px]">46% more than last month</p>
            </div>
            <div className="text-white text-center">
              <p className="text-[16px]">Active Apps</p>
              <h3 className="font-extrabold text-[64px]">132+</h3>
              <p className="text-[16px]">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;