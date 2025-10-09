import { useNavigation } from 'react-router';
import { motion } from 'framer-motion';

const Loading = () => {
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
      <div className="flex justify-center items-center h-screen w-40 mx-auto">
        <p className="text-8xl text-[#081436] font-black">L</p>
        <motion.img
          src="https://i.ibb.co.com/tT4NB2V5/logo.png"
          alt="logo"
          className="mx-auto"
          variants={spin}
          animate="animate"
          width={70}
        />
        <p className="text-8xl text-[#081436] font-black">DING</p>
      </div>
    );
  }
  return null;
};

export default Loading;
