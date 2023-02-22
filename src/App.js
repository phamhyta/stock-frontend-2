<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import {LandingPage, Home} from "./components";
function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />}> */}
        <Route path="/" element={<LandingPage />} />
      {/* </Route> */}
=======
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Home, HomePage } from './components';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        <Route path="home" element={<HomePage />} />
      </Route>
>>>>>>> 0f71d484ca1b7b3aeb9ce36700bd3b5373210a36
    </Routes>
  );
}

export default App;
