import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") navigate("/dashboard", { replace: true });
  }, [location.pathname, navigate]);

  return (
    <div className="flex w-full">
      
    </div>
  );
};

export default Home;
