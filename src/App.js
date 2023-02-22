<<<<<<< HEAD
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import {  Dashboard,Home, HomePage, LandingPage} from "./components";
function App() {
  return (
    <Routes>
       <Route path="/" element={<Home />}>
=======
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Home, HomePage } from './components';
=======
import { Routes, Route } from 'react-router-dom';
import { LandingPage, Home, HomePage } from './components';
>>>>>>> 0ea9d43e8c075c54ca993fbd7b7e5995c8e7cd29
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
<<<<<<< HEAD
>>>>>>> 0f71d484ca1b7b3aeb9ce36700bd3b5373210a36
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
=======
>>>>>>> 0ea9d43e8c075c54ca993fbd7b7e5995c8e7cd29
        <Route path="home" element={<HomePage />} />
      </Route>
      <Route path="/dashboard" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
