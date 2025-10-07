import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1400px] mx-auto">
        <Outlet />
      </div>
        <Footer />
    </>
  );
};

export default Home;