import { useLoaderData, useNavigation } from "react-router";
import Banner from "../../components/HomeComponents/Banner/Banner";
import Hero from "../../components/HomeComponents/Hero/Hero";
import TrendingApps from "../../components/HomeComponents/TrendingApps/TrendingApps";
import { motion } from 'framer-motion';
 
 

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  const navigation = useNavigation();
  const spin = {
    animate: {
      rotate: [0, 360],
      transition: {
        repeat: Infinity,
        ease: 'linear',
        duration: 3,
      },
    },
  };

  if (navigation.state === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="animate-pulse">L</span>
        <motion.img
          src="https://i.ibb.co.com/tT4NB2V5/logo.png"
          alt="logo"
          className="w-36 mx-auto"
          variants={spin}
          animate="animate"
          style={{ width: 80 }}
        />
        <span className="animate-pulse">DING</span>
      </div>
    );
  }
  
  return (
    <>
      <Banner />
      <Hero />
      <TrendingApps data={data} />
    </>
  );
};

export default Home;
