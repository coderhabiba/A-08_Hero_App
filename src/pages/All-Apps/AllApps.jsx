import { useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import AppCard from '../../components/AppCard/AppCard';
import { motion } from 'framer-motion';


const AllApps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  console.log(search);

  
  const filteredApps = data.filter(app => app.title.toLowerCase().includes(search.toLowerCase()));

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
    <div className="py-20 text-center max-w-[1400px] mx-auto">
      <h1 className="mb-4 text-5xl font-bold text-[#001931]">
        Our All Applications
      </h1>
      <p className="mb-12 text-xl text-[#627382]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      {/* Search bar */}
      <div className="flex items-center justify-between mb-5">
        <h4 className="text-left text-2xl font-semibold text-[#001931]">
          ({filteredApps.length}) Apps Found
        </h4>

        <label className="input bg-transparent flex items-center border border-gray-300 rounded-md px-3 py-2">
          <svg
            className="h-[1em] opacity-50 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className="grow outline-none"
            placeholder="Search Apps"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </label>
      </div>

      {/* Filtered apps */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {filteredApps.length > 0 ? (
          <>
            {filteredApps.map(d => (
              <AppCard key={d.id} d={d} />
            ))}
          </>
        ) : (
          <div className='w-[1400px] mx-auto'>
            <p className="text-center col-span-full text-3xl font-extrabold text-red-500">
              No App Found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;
