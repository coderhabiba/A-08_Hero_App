import { useLoaderData } from "react-router";
import Banner from "../../components/HomeComponents/Banner/Banner";
import Hero from "../../components/HomeComponents/Hero/Hero";
import TrendingApps from "../../components/HomeComponents/TrendingApps/TrendingApps";


const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  

  return (
    <>
      <Banner />
      <Hero />
      <TrendingApps data={data} />
    </>
  );
};

export default Home;
