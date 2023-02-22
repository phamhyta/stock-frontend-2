import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Header, Footer } from './layout';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') navigate('/dashboard', { replace: true });
  }, [location.pathname, navigate]);

  return (
    <div className="w-full">
      <div>
        <Header />
      </div>
      <div className="bg-tintMain">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
