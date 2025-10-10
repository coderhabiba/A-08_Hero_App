import { Outlet, useNavigation } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loading/Loading';

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div>
      <Navbar />
      {isLoading && <Loading />}
      <div className='container mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
