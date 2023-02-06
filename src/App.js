import { Routes, Route } from "react-router-dom";
import {LandingPage, Home} from "./components";
function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />}> */}
        <Route path="/" element={<LandingPage />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
