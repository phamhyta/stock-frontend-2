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
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
>>>>>>> 0f71d484ca1b7b3aeb9ce36700bd3b5373210a36
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        <Route path="home" element={<HomePage />} />
      </Route>
      <Route path="/dashboard" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
