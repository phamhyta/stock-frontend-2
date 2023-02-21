import { Routes, Route } from "react-router-dom";
import {  Dashboard,Home, HomePage, LandingPage} from "./components";
function App() {
  return (
    <Routes>
       <Route path="/" element={<Home />}>
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        <Route path="home" element={<HomePage />} />
      </Route>
      <Route path="/dashboard" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
